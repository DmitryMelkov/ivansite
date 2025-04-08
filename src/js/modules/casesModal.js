export const initCasesModals = () => {
  const caseButtons = document.querySelectorAll('[data-cases-modal-id]');
  const modals = document.querySelectorAll('[data-cases-modal]');

  const closeAllModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('cases-modal--active');
    });
  }

  caseButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Получаем ID модального окна из атрибута data-cases-modal-id
      const modalId = button.getAttribute('data-cases-modal-id');
      const modal = document.getElementById(modalId);

      if (modal) {
        closeAllModals();
        modal.classList.add('cases-modal--active');
      }
    });
  });

  modals.forEach(modal => {
    const closeButton = modal.querySelector('[data-cases-modal-close]');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modal.classList.remove('cases-modal--active');
      });
    }

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('cases-modal--active');
      }
    });
  });

  // Закрытие модального окна при нажатии клавиши Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });
}