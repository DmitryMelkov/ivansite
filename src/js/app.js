import { aboutMeSlider } from './modules/aboutMeSlider.js';
import { burgerMenu } from './modules/burger.js';
import { initFormHandler } from './modules/formHandler.js';
import { initActiveCard } from './modules/activeCard.js';
import { initTabs } from './modules/tabs.js';
import { setupFormModal } from './modules/formModal.js';
import { initCasesModals } from './modules/casesModal.js';
import { reviewsSlider } from './modules/reviewsSlider.js';
import { initReviewsModals } from './modules/reviewsModal.js';
import { initAccordion } from './modules/accordion.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { setupSuccessModal } from './modules/successModal.js';
import { initFancybox } from './modules/fancyboxgallery.js';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация бургер-меню (есть на всех страницах)
  burgerMenu();

  // Инициализация модалки только если она есть на странице
  if (document.getElementById('universalModal')) {
    setupFormModal();
    initFormHandler('universalForm');
  }

  // Инициализация слайдера "Обо мне" только если он есть
  if (document.querySelector('.about-me__slider')) {
    aboutMeSlider();
  }

  // Инициализация активных карточек
  initActiveCard();

  // Инициализация табов
  initTabs();

  // Инициализация модальных окон кейсов
  initCasesModals();

  // Инициализация формы обсуждения проекта
  if (document.getElementById('discussForm')) {
    initFormHandler('discussForm');
  }

  // Инициализация слайдера отзывов
  if (document.querySelector('.reviews__slider')) {
    reviewsSlider();
  }

  // Инициализация модальных окон отзывов
  initReviewsModals();

  // Инициализация аккордеона
  initAccordion();

  // Инициализация формы вопросов
  if (document.getElementById('questionsForm')) {
    initFormHandler('questionsForm');
  }

  // Инициализация плавного скролла
  initSmoothScroll();

  // Инициализация модального окна успеха
  setupSuccessModal();

  // Инициализация Fancybox
  initFancybox();
});
