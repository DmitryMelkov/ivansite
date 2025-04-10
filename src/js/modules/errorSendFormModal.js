// errorModal.js
const errorSendFormModal = document.getElementById('errorSendForm');
const closeErrorSendFormModalBtn = document.getElementById('closeErrorSendFormModal');

export const openErrorSendFormModal = () => {
  errorSendFormModal.classList.add('show');
};

export const closeErrorSendFormModal = () => {
  errorSendFormModal.classList.remove('show');
};

export const setupErrorSendFormModal = () => {
  if (errorSendFormModal) {
    // Кнопка закрытия модалки
    closeErrorSendFormModalBtn.addEventListener('click', closeErrorSendFormModal);

    // Закрытие по клику вне модалки
    window.addEventListener('click', (event) => {
      if (event.target === errorSendFormModal) {
        closeErrorSendFormModal();
      }
    });
  }
};