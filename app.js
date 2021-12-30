const btnPopMobileMenu = document.querySelector('.btn-menu');
const btnBack = document.querySelector('.btn-back');
const dimed = document.querySelector('.dimed');

const toggleMobileMenu = () => {
    document.querySelector('.menu-mobile').classList.toggle('on');
};

btnPopMobileMenu.addEventListener('click', toggleMobileMenu);
btnBack.addEventListener('click', toggleMobileMenu);
dimed.addEventListener('click', toggleMobileMenu);