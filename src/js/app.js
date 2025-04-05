import { burgerMenu } from './modules/burger.js';
import { initFormHandler } from './modules/formHandler.js';
import { setupModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();

  // Настройка первого модального окна
  setupModal('openModalBtn1', 'closeModalBtn1', 'consultationModal1');

  // Настройка второго модального окна
  setupModal('openModalBtn2', 'closeModalBtn2', 'consultationModal2');

  // Инициализация обработчика формы модал 1
  initFormHandler('contactForm');

  // Инициализация обработчика формы модал 2
  initFormHandler('anotherForm');
});
