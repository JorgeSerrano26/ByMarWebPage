var menu_btn = document.getElementById('menu-button')
var menu_icon = document.getElementsByClassName('menu-icon')
var nav = document.getElementById('main-nav')

menu_btn.onclick = function() {
    if(nav.classList.contains('hide')){
        nav.classList.replace('hide', 'show')
        menu_btn.innerHTML = '<a id="menu-button"><span class="menu-icon fas fa-times"></span></a>'
    }else{
        nav.classList.replace('show', 'hide')
        menu_btn.innerHTML = '<a id="menu-button"><span class="menu-icon fas fa-bars"></span></a>'
    }
    
};