import { clearErrors, handleValidation, validateForm } from './formValidate.js';
import { closeModal } from './formModal.js';
import { openSuccessModal } from './successModal.js';
import { openErrorSendFormModal } from './errorSendFormModal.js';

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
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      clearErrors(contactForm);

      const isValid = validateForm(contactForm, formId);
      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        try {
          submitBtn.textContent = 'Отправка...';
          submitBtn.disabled = true;

          const formData = new FormData(contactForm);
          const data = {};

          formData.forEach((value, key) => {
            const input = contactForm.querySelector(`[name="${key}"]`);
            data[key] = input?.cleave?.getRawValue() || value;
          });

          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

          const result = await response.json();
          console.log('Успешный ответ:', result);

          contactForm.reset();
          closeModal();
          openSuccessModal();
        } catch (error) {
          console.error('Ошибка:', error);
          closeModal();
          openErrorSendFormModal(); // Используем функцию открытия
        } finally {
          if (submitBtn) {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
          }
        }
      }
    });
  } else {
    console.error(`Form with id ${formId} not found.`);
  }
}
