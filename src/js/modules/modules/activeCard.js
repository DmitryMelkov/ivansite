export function initActiveCard() {
  const title = document.querySelector('#sticky-title');
  const items = document.querySelectorAll('.creation-website__item');

  // Функция для обновления активной карточки
  const updateActiveItem = () => {
    // Получаем координаты заголовка
    const titleRect = title.getBoundingClientRect();
    const titleCenter = titleRect.top + titleRect.height / 2;

    // Находим карточку, которая ближе всего к центру заголовка
    let closestItem = null;
    let smallestDistance = Infinity;

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;

      // Вычисляем расстояние от центра карточки до центра заголовка
      const distance = Math.abs(itemCenter - titleCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestItem = item;
      }
    });

    // Добавляем класс 'active' только к ближайшей карточке
    items.forEach((item) => {
      if (item === closestItem) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveItem);

  updateActiveItem();
}
