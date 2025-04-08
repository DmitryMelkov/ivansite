export function initTabs() {
  const tabsBtns = document.querySelectorAll('.tabs__btn');
  const tabsContents = document.querySelectorAll('.tabs__content');

  tabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок и контента
      tabsBtns.forEach((item) => item.classList.remove('tabs__btn--active'));
      tabsContents.forEach((item) => item.classList.remove('tabs__content--active'));

      // Добавляем активный класс к текущей кнопке и соответствующему контенту
      btn.classList.add('tabs__btn--active');
      const tabContent = document.querySelector(`[data-tab-content="${btn.dataset.tab}"]`);
      tabContent.classList.add('tabs__content--active');
    });
  });
}