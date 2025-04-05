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

  overlay.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });

  closeButton.addEventListener('click', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });
}