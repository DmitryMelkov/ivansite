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
          const formTitle = contactForm.querySelector('h2, h3, .form-title')?.textContent || 'Форма';
          data.formTitle = formTitle;

          formData.forEach((value, key) => {
            const input = contactForm.querySelector(`[name="${key}"]`);
            data[key] = input?.cleave?.getRawValue() || value;
          });

          const response = await fetch('/local/test.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(result.message || 'Ошибка отправки формы');
          }

          console.log('Форма отправлена:', result);
          contactForm.reset();
          closeModal();
          openSuccessModal();
        } catch (error) {
          console.error('Ошибка:', error.message);
          closeModal();
          openErrorSendFormModal(error.message);
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
