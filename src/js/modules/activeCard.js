export function initActiveCard() {
  const title = document.querySelector('#sticky-title');
  const items = document.querySelectorAll('.creation-website__item');

  if (title) {
  // Функция для обновления активной карточки
  const updateActiveItem = () => {
    let referencePoint;

    if (window.innerWidth > 767) {
      // Для больших экранов используем центр заголовка
      const titleRect = title.getBoundingClientRect();
      referencePoint = titleRect.top + titleRect.height / 2;
    } else {
      // Для маленьких экранов используем центр окна
      referencePoint = window.innerHeight / 2;
    }

    // Находим карточку, которая ближе всего к точке отсчета
    let closestItem = null;
    let smallestDistance = Infinity;

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;

      // Вычисляем расстояние от центра карточки до точки отсчета
      const distance = Math.abs(itemCenter - referencePoint);

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

  // Слушаем событие scroll на window
  window.addEventListener('scroll', updateActiveItem);

  // Слушаем изменение размера окна
  window.addEventListener('resize', updateActiveItem);

  // Инициализация при загрузке страницы
  updateActiveItem();
  }


}