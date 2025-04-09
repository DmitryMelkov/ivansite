export function initReviewsModals() {
  const modalLinks = document.querySelectorAll('.reviews__link--more');
  const modals = document.querySelectorAll('.reviews__modal');

  // Открытие модалки
  modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('data-reviews-modal');
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  // Закрытие модалки
  modals.forEach(modal => {
    const closeButton = modal.querySelector('.reviews-modal__close');

    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрытие модалки при клике вне контента
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}