(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header-active');
        } else (
            header.classList.remove('header-active')
        )
    };
}());

//Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menuItem = document.querySelector('.menu');
    const menuCloseItem = document.querySelector('.header-nav-close');
    burgerItem.addEventListener('click', () => {
        menuItem.classList.add('menu-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menuItem.classList.remove('menu-active');
    });

}());