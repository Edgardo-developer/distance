const menuBtn = document.querySelector(".m_menu");
const menu = document.querySelector(".main__menu-sidebar");

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
});