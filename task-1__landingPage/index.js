
let burger = document.querySelector("#burger");
let Links = document.querySelector("#nav-li");
burger.addEventListener('click',()=> {
    Links.classList.toggle("nav-show");
})
