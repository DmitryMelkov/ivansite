// successModal.js
export const openSuccessModal = () => {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.add('show');

    // Закрытие при клике на кнопку "Хорошо"
    const okButton = document.getElementById('successModalOkButton');
    if (okButton) {
      okButton.addEventListener('click', closeSuccessModal);
    }

    // Закрытие при клике на крестик
    const closeButton = document.getElementById('closeSuccessModal');
    if (closeButton) {
      closeButton.addEventListener('click', closeSuccessModal);
    }

    // Закрытие при клике вне модалки
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        closeSuccessModal();
      }
    });
  }
};

export const closeSuccessModal = () => {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.remove('show');
  }
};

export const setupSuccessModal = () => {
  // Можно добавить дополнительную настройку если нужно
};