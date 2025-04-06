import { aboutMeSlider } from './modules/aboutMeSlider.js';
import { burgerMenu } from './modules/burger.js';
import { initFormHandler } from './modules/formHandler.js';
import { setupModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();

  // Настройка универсальной модалки
  setupModal();

  // Инициализация обработчика формы
  initFormHandler('universalForm');

  // слайдер в секии обо мне
  aboutMeSlider();
});
