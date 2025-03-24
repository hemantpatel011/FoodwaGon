
const navSearch = document.querySelector(".nav-search");
    navSearch.addEventListener("click", addBorder);

    const delivery = document.getElementById("delivery");
    delivery.addEventListener("click", adddbg);

    const pickup = document.getElementById("pickup");
    pickup.addEventListener("click", addpbg);
 


function addBorder(){
    navSearch.classList.add("search-border");
}

function adddbg(){
    delivery.classList.add("d-bg");
    pickup.classList.remove("p-bg");
}

function addpbg(){
    pickup.classList.add("p-bg");
    delivery.classList.remove("d-bg");
}
