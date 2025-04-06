export const clearErrors = (form) => {
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach((error) => error.remove());
};

export const validateField = (input, message) => {
  if (!input.value.trim()) {
    showError(input, message);
    return false;
  }
  showSuccess(input);
  return true;
};

export const validateEmailField = (input, message) => {
  if (!input.value.trim()) {
    showError(input, message);
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    showError(input, 'Неверный формат email.');
    return false;
  }
  showSuccess(input);
  return true;
};

export const validatePhoneField = (input, message) => {
  if (!input.value.trim()) {
    showError(input, message);
    return false;
  } else if (!/^\+?\d{10,15}$/.test(input.value)) {
    showError(input, 'Неверный формат номера телефона.');
    return false;
  }
  showSuccess(input);
  return true;
};

export const validateCheckboxField = (input, message) => {
  const container = input.closest('.checkbox-container'); // Находим родительский контейнер
  const label = input.nextElementSibling; // Находим лейбл рядом с чекбоксом

  if (!input.checked) {
    input.classList.add('input-error');
    input.classList.remove('input-success');
    if (container) {
      container.classList.add('error'); // Добавляем класс ошибки к контейнеру
    }
    if (label && label.tagName === 'LABEL') {
      label.classList.add('label-error'); // Добавляем класс ошибки к лейблу
    }
    return false;
  }

  input.classList.remove('input-error');
  input.classList.remove('input-success');
  if (container) {
    container.classList.remove('error'); // Удаляем класс ошибки у контейнера
  }
  if (label && label.tagName === 'LABEL') {
    label.classList.remove('label-error'); // Удаляем класс ошибки у лейбла
  }
  return true;
};

export const validateSelectField = (input, message) => {
  if (!input.value) {
    showError(input, message);
    return false;
  }
  showSuccess(input);
  return true;
};

export const removeError = (input) => {
  input.classList.remove('input-error');
  const errorElement = input.nextElementSibling;
  if (errorElement && errorElement.classList.contains('error-message')) {
    errorElement.remove();
  }
};

export const showError = (input, message) => {
  removeError(input);

  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;

  input.classList.add('input-error');
  input.classList.remove('input-success');
  input.insertAdjacentElement('afterend', errorElement);
};

export const showSuccess = (input) => {
  removeError(input);
  input.classList.remove('input-error');
  input.classList.add('input-success');
};

export const handleValidation = (target) => {
  if (target.matches('#name')) {
    validateField(target, 'Пожалуйста, введите ваше имя.');
  } else if (target.matches('#phone')) {
    validatePhoneField(target, 'Пожалуйста, введите номер телефона.');
  } else if (target.matches('#email')) {
    validateEmailField(target, 'Пожалуйста, введите ваш email.');
  } else if (target.matches('#contactMethod')) {
    validateSelectField(target, 'Пожалуйста, выберите способ связи.');
  } else if (target.matches('#taskDescription')) {
    validateField(target, 'Пожалуйста, опишите задачу.');
  } else if (target.matches('#agreement')) {
    validateCheckboxField(target, 'Необходимо согласиться с политикой конфиденциальности.');
  }
};


export const validateForm = (form) => {
  let isValid = true;

  const nameInput = form.querySelector('#name');
  const phoneInput = form.querySelector('#phone');
  const emailInput = form.querySelector('#email');
  const contactMethodInput = form.querySelector('#contactMethod');
  const taskDescriptionInput = form.querySelector('#taskDescription');
  const agreementInput = form.querySelector('#agreement');

  if (!validateField(nameInput, 'Пожалуйста, введите ваше имя.')) {
    isValid = false;
  }

  if (!validatePhoneField(phoneInput, 'Пожалуйста, введите номер телефона.')) {
    isValid = false;
  }

  if (!validateEmailField(emailInput, 'Пожалуйста, введите ваш email.')) {
    isValid = false;
  }

  if (!validateSelectField(contactMethodInput, 'Пожалуйста, выберите способ связи.')) {
    isValid = false;
  }

  if (!validateField(taskDescriptionInput, 'Пожалуйста, опишите задачу.')) {
    isValid = false;
  }

  if (!validateCheckboxField(agreementInput, 'Необходимо согласиться с политикой конфиденциальности.')) {
    isValid = false;
  }

  return isValid;
};
