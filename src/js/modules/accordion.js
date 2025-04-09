export const initAccordion = () => {
  const accordionHeaders = document.querySelectorAll('.accordion-item__header');

  accordionHeaders.forEach(header => {
    const toggleButton = header.querySelector('.accordion-item__toggle');
    const content = header.nextElementSibling;

    header.addEventListener('click', () => {
      // Закрываем все открытые аккордеоны
      document.querySelectorAll('.accordion-item__content').forEach(item => {
        if (item !== content) {
          item.classList.remove('active');
          item.previousElementSibling.querySelector('.accordion-item__toggle').classList.remove('active');
        }
      });

      // Переключаем текущий аккордеон
      content.classList.toggle('active');
      toggleButton.classList.toggle('active');
    });
  });
};