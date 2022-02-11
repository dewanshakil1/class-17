const s_menu=document.querySelectorAll(".s-menu .main-menu ul li a");
const body=document.querySelectorAll(".t-body .t-pane");
s_menu. forEach(item=>{
    item.addEventListener("click",function(e){
        e.preventDefault();
        s_menu.forEach(items=>{
            items.classList.remove("active")

        });
        item.classList.add("active")
        const t_pane=document.querySelector(this.getAttribute('href'));
        body.forEach(items=>{
            items.classList.remove("active")
            
        });
        t_pane.classList.add("active")
    });    
});

/**result apps */
function dataSend(key , array){

    let data = JSON.stringify(array);
    localStorage.setItem(key, data);
    return true;
}
function getData(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false ;

}