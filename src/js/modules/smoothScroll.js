import { closeBurgerMenu } from "./utils.js";

export const initSmoothScroll = () => {
  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const offsetTop = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const menuLinks = document.querySelectorAll('.header__link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
      closeBurgerMenu();
    });
  });
};