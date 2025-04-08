import { clearErrors, handleValidation, validateForm } from './formValidate.js';
import { closeModal } from './formModal.js';

export function initFormHandler(formId) {
  const contactForm = document.getElementById(formId);

  if (contactForm) {
    // Валидация на лету (input)
    contactForm.addEventListener('input', (event) => {
      handleValidation(event.target);
    });

    // Валидация при потере фокуса (blur)
    contactForm.addEventListener('blur', (event) => {
      handleValidation(event.target);
    });

    // Валидация при отправке формы
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Очищаем предыдущие ошибки
      clearErrors(contactForm);

      // Валидация формы
      const isValid = validateForm(contactForm);

      if (isValid) {
        // Если форма валидна, собираем данные
        const formData = new FormData(contactForm);
        const data = {};

        formData.forEach((value, key) => {
          data[key] = value;
        });

        console.log(data); // Вывод данных формы в консоль

        // Закрываем модальное окно после отправки формы
        closeModal();
      }
    });
  } else {
    console.error(`Form with id ${formId} not found.`);
  }
}
