export function initTabs() {
  const tabsBtns = document.querySelectorAll('.tabs__btn');
  const tabsContents = document.querySelectorAll('.tabs__content');

  tabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок и контента
      tabsBtns.forEach((item) => item.classList.remove('tabs__btn--active'));
      tabsContents.forEach((item) => item.classList.remove('tabs__content--active'));

      // Добавляем активный класс к текущей кнопке
      btn.classList.add('tabs__btn--active');

      // Находим соответствующий контент по data-tab-content
      const tabId = btn.dataset.tab;
      const tabContent = document.querySelector(`.tabs__content[data-tab-content="${tabId}"]`);

      if (tabContent) {
        tabContent.classList.add('tabs__content--active');
      }
    });
  });
}