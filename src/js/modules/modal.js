// Функция для открытия модального окна
export const openModal = (title) => {
  modalTitle.textContent = title; // Устанавливаем заголовок
  universalModal.classList.add('show'); // Показываем модалку
};

// Функция для закрытия модального окна
export const closeModal = () => {
  universalModal.classList.remove('show'); // Скрываем модалку
};

export const setupModal = () => {
  const universalModal = document.getElementById('universalModal');
  const modalTitle = document.getElementById('modalTitle');

  // Кнопка закрытия модалки
  document.getElementById('closeUniversalModal').addEventListener('click', closeModal);

  // Закрытие по клику вне модалки
  window.addEventListener('click', (event) => {
    if (event.target === universalModal) {
      closeModal();
    }
  });

  // Обработка кнопок для открытия модалок
  document.querySelectorAll('[data-open-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-modal-title'); // Получаем заголовок из атрибута
      openModal(title);
    });
  });
};
