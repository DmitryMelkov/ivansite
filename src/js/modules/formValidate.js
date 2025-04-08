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
  const container = input.closest('.checkbox-container');
  const label = input.nextElementSibling;

  if (!input.checked) {
    input.classList.add('input-error');
    input.classList.remove('input-success');
    if (container) container.classList.add('error');
    if (label && label.tagName === 'LABEL') label.classList.add('label-error');
    return false;
  }

  input.classList.remove('input-error');
  if (container) container.classList.remove('error');
  if (label && label.tagName === 'LABEL') label.classList.remove('label-error');
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
  if (target.matches('#name, #discussName')) {
    validateField(target, 'Пожалуйста, введите ваше имя.');
  } else if (target.matches('#phone, #discussPhone')) {
    validatePhoneField(target, 'Пожалуйста, введите номер телефона.');
  } else if (target.matches('#email, #discussEmail')) {
    validateEmailField(target, 'Пожалуйста, введите ваш email.');
  } else if (target.matches('#contactMethod, #discussContactMethod')) {
    validateSelectField(target, 'Пожалуйста, выберите способ связи.');
  } else if (target.matches('#taskDescription, #discussTaskDescription')) {
    validateField(target, 'Пожалуйста, опишите задачу.');
  } else if (target.matches('#agreement, #duscussAgreement')) {
    validateCheckboxField(target, 'Необходимо согласиться с политикой конфиденциальности.');
  }
};

export const validateForm = (form, formId) => {
  let isValid = true;

  const nameInput = form.querySelector(`#${formId === 'universalForm' ? 'name' : 'discussName'}`);
  const phoneInput = form.querySelector(`#${formId === 'universalForm' ? 'phone' : 'discussPhone'}`);
  const emailInput = form.querySelector(`#${formId === 'universalForm' ? 'email' : 'discussEmail'}`);
  const contactMethodInput = form.querySelector(`#${formId === 'universalForm' ? 'contactMethod' : 'discussContactMethod'}`);
  const taskDescriptionInput = form.querySelector(`#${formId === 'universalForm' ? 'taskDescription' : 'discussTaskDescription'}`);
  const agreementInput = form.querySelector(`#${formId === 'universalForm' ? 'agreement' : 'duscussAgreement'}`);

  if (!validateField(nameInput, 'Пожалуйста, введите ваше имя.')) isValid = false;
  if (!validatePhoneField(phoneInput, 'Пожалуйста, введите номер телефона.')) isValid = false;
  if (!validateEmailField(emailInput, 'Пожалуйста, введите ваш email.')) isValid = false;
  if (!validateSelectField(contactMethodInput, 'Пожалуйста, выберите способ связи.')) isValid = false;
  if (!validateField(taskDescriptionInput, 'Пожалуйста, опишите задачу.')) isValid = false;
  if (!validateCheckboxField(agreementInput, 'Необходимо согласиться с политикой конфиденциальности.')) isValid = false;

  return isValid;
};
