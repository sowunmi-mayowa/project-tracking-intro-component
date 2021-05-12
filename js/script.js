const menu = document.querySelector("#menu");
const mobileNav = document.querySelector(".mobile-nav")

menu.addEventListener('click', toggleNav)

function toggleNav(){
    menu.src = "./images/icon-close.svg"

    if(mobileNav.style.right == "400px"){
        mobileNav.style.right = "60px"
    }
    else{
        mobileNav.style.right = "400px"
        menu.src = "./images/icon-hamburger.svg"
    }
    
}