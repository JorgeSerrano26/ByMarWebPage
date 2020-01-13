var menu_btn_open = document.getElementById('menu-button-open')
var menu_btn_close = document.getElementById('menu-button-close')
var menu_icon = document.getElementsByClassName('menu-icon')
var nav = document.getElementById('main-nav')

menu_btn_open.onclick = () => {menuToggle()};
menu_btn_close.onclick = () => {menuToggle()};

function menuToggle(){
    if(nav.classList.contains('hide')){
        nav.classList.replace('hide', 'show')
        document.body.classList.add('block-scroll')
    }else{
        nav.classList.replace('show', 'hide')
        document.body.classList.remove('block-scroll')
    }
}