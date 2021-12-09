let nav = document.getElementById('nav')
let ul = document.getElementById('nav_ul')

window.addEventListener('scroll', function (e) {
    if (e.target.documentElement.scrollTop > 10) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        ul.style.marginTop = '14px'
    } else {
        nav.style.backgroundColor = 'transparent'
        ul.style.marginTop = '32px'
    }
})



let menu = document.getElementById("menu-collapsed")
menu.addEventListener('click', function(){
    console.log('ck');
    menu.classList.toggle("menu-expanded")
})