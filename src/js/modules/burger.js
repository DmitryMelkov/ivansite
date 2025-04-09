import { closeBurgerMenu } from "./utils.js";

export const burgerMenu = () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.header__overlay');
  const closeButton = document.querySelector('.header__burger-close');

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', closeBurgerMenu);

  closeButton.addEventListener('click', closeBurgerMenu);
};