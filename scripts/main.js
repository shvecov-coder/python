const menuBurger = document.querySelector('.button__burger');
const burgerList = document.querySelector('.burger');



menuBurger.addEventListener('click', () => {
    if (burgerList.classList.contains('burger--open')) {
        closeBurgerMenu()
    } else {
        openBurgerMenu();
    }
});

function openBurgerMenu() {
    const headerTopHeigth = document.querySelector('.header-top').offsetHeight;
    const headerMenuHeigth = document.querySelector('.header__menu').offsetHeight;
    burgerList.classList.add('burger--open');
    burgerList.style.top = headerTopHeigth + headerMenuHeigth + "px";
}

function closeBurgerMenu(){
    burgerList.classList.remove('burger--open');
    burgerList.style.top = -400 + '%';
}