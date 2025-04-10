import { clearErrors, handleValidation, validateForm } from './formValidate.js';
import { closeModal } from './formModal.js';
import { openSuccessModal } from './successModal.js';

export function initFormHandler(formId) {
  const contactForm = document.getElementById(formId);
  if (contactForm) {
    // Инициализация маски для поля телефона
    // Инициализация маски для поля телефона
    const phoneInput = contactForm.querySelector('input[type="tel"]');
    if (phoneInput) {
      // Создаем экземпляр Cleave.js
      phoneInput.cleave = new Cleave(phoneInput, {
        phone: true,
        phoneRegionCode: 'RU', // Формат для России
        delimiter: ' ', // Разделитель между частями номера
      });

      // Добавляем обработчик для автоматической подстановки +7
      phoneInput.addEventListener('input', (event) => {
        const inputValue = event.target.value;

        // Если первая цифра - это 7, заменяем её на +7
        if (/^7/.test(inputValue)) {
          event.target.value = '+7' + inputValue.slice(1); // Заменяем 7 на +7
          phoneInput.cleave.setRawValue(event.target.value); // Обновляем значение Cleave.js
        }
      });
    }

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
      const isValid = validateForm(contactForm, formId);
      if (isValid) {
        const formData = new FormData(contactForm);
        const data = {};

        formData.forEach((value, key) => {
          const input = contactForm.querySelector(`[name="${key}"]`);
          if (input && input.cleave) {
            data[key] = input.cleave.getRawValue();
          } else {
            data[key] = value;
          }
        });

        // Здесь можно добавить реальную отправку формы через fetch
        console.log('Form data:', data);

        // Очищаем форму
        contactForm.reset();

        // Закрываем текущее модальное окно
        closeModal();

        // Показываем модалку успеха
        openSuccessModal();
      }
    });
  } else {
    console.error(`Form with id ${formId} not found.`);
  }
}
