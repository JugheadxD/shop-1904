let burger_btn = document.querySelector('.header__button');
let menu = document.querySelector('.header__navigation');
let close_btn = document.querySelector('.header__navigation-button');




burger_btn.addEventListener('click', () => {
    menu.classList.toggle('header__navigation-menu--toggle');
})

close_btn.addEventListener('click', () => {
    menu.classList.remove('header__navigation-menu--toggle');
})