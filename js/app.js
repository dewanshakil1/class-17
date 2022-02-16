const student=document.getElementById("student");
const list=document.getElementById("dataList");


student.addEventListener("submit",function(e){
    e.preventDefault()
    let name=student.querySelector('input[placeholder="your name"]');
    let roll=student.querySelector("input[placeholder='your roll']");
    let classN=student.querySelector("input[placeholder='your class']");
    let photo = student.querySelector("input[placeholder='Photo']"); 
    let gender = student.querySelector("input[type='radio']:checked");  
    let ban=student.querySelector("input[placeholder='Bangla']");
    let en=student.querySelector("input[placeholder='English']");
    let mat=student.querySelector("input[placeholder='Math']");
    let ss=student.querySelector("input[placeholder='Social science']");
    let s=student.querySelector("input[placeholder='Science']");
    let reli=student.querySelector("input[placeholder='Religion']");
    
   
    if(name.value == '' || roll.value == '' || classN.value == '' ){
        alert('All fields are required ');
    }
    else{
        let arr=[];
        if( getData('apps')){
            arr= getData('apps');
        }
        arr.push({
            name:name.value,
            roll:roll.value,
            classN:classN.value,
            photo:photo.value,
            gender:gender.value,
            ban : ban.value, 
            en: en.value, 
            mat : mat.value, 
            ss : ss.value, 
            s : s.value, 
            reli : reli.value 
        
          });
          dataSend('apps', arr);   
          student.querySelector('input[placeholder="your name"]').value="";
          student.querySelector("input[placeholder='your roll']").value="";
          student.querySelector("input[placeholder='your class']").value="";
         student.querySelector("input[placeholder='Photo']").value=""; 
         student.querySelector("input[type='radio']:checked").value="";  
        student.querySelector("input[placeholder='Bangla']").value="";
        student.querySelector("input[placeholder='English']").value="";
        student.querySelector("input[placeholder='Math']").value="";
        student.querySelector("input[placeholder='Social science']").value="";
        student.querySelector("input[placeholder='Science']").value="";
        student.querySelector("input[placeholder='Religion']").value="";
        allStudentData();
    }        
});
allStudentData();
function allStudentData(){

    let all_data = getData('apps');
    let data='';
   
    all_data.map((student, index)=>{
        data+= `
        <tr>
        <th scope="row">${index+1}</th>                        
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.classN}</td>
        <td>${student.gender}</td>
        <td><img style="width:50px; height:50px;object-fit:cover;" src="${ student.photo }"></td>
        <td>3.99</td>
        <td>A-</td>         
        <td>
        <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#studentModal" onclick="single_data(${ index })"  >View</button>
         <button onclick="deleteStudent(${ index })" class="btn btn-danger btn-sm">Delete</button>
         </td>                       
      </tr>   
        `;
    });  
 list.innerHTML= data;  

 }
// delete student id
function deleteStudent(id){
    let conf = confirm('Are you sre ?');
    if(conf){
        let data = getData('apps');
        data.splice(id, 1);
        dataSend('apps',data);
        allStudentData();
    }else{
        return false;
    }
}
const studentModal=document.querySelector(".studentM");

function single_data(index){
  let res = new  Result;

    let data = getData('apps');
    studentModal.innerHTML=`
    <img  src="${data[index].photo}" alt="">
          <h2>${data[index].name}</h2>          
            <table class="table ">
              <thead>
                <tr>
                  <td>Subject</td>
                  <td>Marks</td>
                  <td>Gpa</td>
                  <td>Grade</td>
                  <td>Cgpa</td>
                  <td>Result</td>
                </tr>
              </thead>
              <tbody>
                <td>Bangla</td>
                <td>${data[index].ban}</td>
                <td>${res.result(data[index].ban).gpacal}</td>
                <td>A+</td>
                <td>5</td>
                <td>A+</td>
              </tbody>
              <tbody>
                <td>English</td>
                <td>${data[index].en}</td>
                <td>5</td>
                <td>A+</td>               
              </tbody>
              <tbody>
                <td>Math</td>
                <td>${data[index].mat}</td>
                <td>5</td>
                <td>A+</td>
              
            
              </tbody>
              <tbody>
                <td>Social science</td>
                <td>${data[index].ss}</td>
                <td>5</td>
                <td>A+</td>
          
             
              </tbody>
              <tbody>
                <td>Science</td>
                <td>${data[index].s}</td>
                <td>5</td>
                <td>A+</td>
              
                
              </tbody>
              <tbody>
                <td>Religion</td>
                <td>${data[index].reli}</td>
                <td colspan="6">5</td>
                <td colspan="6">A+</td>
 
               
              </tbody>
            </table>
    `;   

}
