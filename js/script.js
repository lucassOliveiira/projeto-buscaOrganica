//nav scroll
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        nav.classList.remove('max')
        nav.classList.add('min')
    } else if (window.scrollY == 0) {
        nav.classList.add('max')
        nav.classList.remove('min')
    }
})

//menu hamburguer
const menu = document.getElementById('menu')
const navList = document.getElementById('nav-list')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    navList.classList.toggle('active')
})