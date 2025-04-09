export const closeBurgerMenu = () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.header__overlay');

  burger.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
};