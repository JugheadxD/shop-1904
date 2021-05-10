let burger_btn = document.querySelector('.header__button');
let menu = document.querySelector('.header__navigation');
let close_btn = document.querySelector('.header__navigation-button');

let cart_close_btn = document.querySelector('.cart__product-item--close_js');

let cart_item = document.querySelector('.cart__products-item');




burger_btn.addEventListener('click', () => {
    menu.classList.toggle('header__navigation-menu--toggle');
})

close_btn.addEventListener('click', () => {
    menu.classList.remove('header__navigation-menu--toggle');
})