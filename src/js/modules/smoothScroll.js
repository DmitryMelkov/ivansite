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

  // Обработка ссылок в хедере
  const headerLinks = document.querySelectorAll('.header__link');
  headerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
      closeBurgerMenu();
    });
  });

  // Обработка ссылок в футере
  const footerLinks = document.querySelectorAll('.footer__link');
  footerLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      smoothScroll(targetId);
      closeBurgerMenu(); // Добавляем закрытие бургер-меню и для футера
    });
  });
};