
    let searchBtn=document.getElementById("searchicon");
    let searchBox=document.getElementById("searchbox");
    searchBtn.addEventListener("click",()=>{
        searchBox.classList.toggle("collapsetoggle");
        searchBox.style.transition="1s all";
        

    })
