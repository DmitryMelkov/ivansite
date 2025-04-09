import { aboutMeSlider } from './modules/aboutMeSlider.js';
import { burgerMenu } from './modules/burger.js';
import { initFormHandler } from './modules/formHandler.js';
import { initActiveCard } from './modules/activeCard.js';
import { initTabs } from './modules/tabs.js';
import { setupFormModal } from './modules/formModal.js';
import { initCasesModals } from './modules/casesModal.js';
import { reviewsSlider } from './modules/reviewsSlider.js';
import { initReviewsModals } from './modules/reviewsModal.js';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();

  // Настройка универсальной модалки
  setupFormModal();

  // Инициализация обработчика формы модалки
  initFormHandler('universalForm');

  // Слайдер в секции обо мне
  aboutMeSlider();

  // Инициализация логики активной карточки
  initActiveCard();

  // Инициализация табов
  initTabs();

  // Инициализация модальных окон кейсов
  initCasesModals();

  // Инициализация обработчика формы discussProject
  initFormHandler('discussForm');

  // слайдер отзывов
  reviewsSlider();

  // Инициализация модальных окон отзывов
  initReviewsModals();
});
