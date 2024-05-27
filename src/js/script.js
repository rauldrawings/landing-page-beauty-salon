const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}
//Quando clicar em um item do menu-bar, esconder o menu//
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener ('click', function (){
        nav.classList.remove('show')
    })
}
// Carrosel Swiper
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidePerView:2,
            setWrapperSize: true
        }
    }
}) 