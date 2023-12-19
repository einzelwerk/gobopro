export function paletteTabs() {
  const tabs = document.querySelectorAll(
    '.lens__container__item-content__info__palette-tabs__item, .lens__container__item-content__info__palette-tabs__item--active',
  );
  const whiteTab = document.querySelector('#white-tab');
  const blackTab = document.querySelector('#black-tab');

  const tabsContainer = document.querySelector('.lens__container__item-content__info__palette-tabs');

  const palette = document.querySelector('.lens__container__item-content__info__palette');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const activeTab = document.querySelector('.lens__container__item-content__info__palette-tabs__item--active');
      if (activeTab) {
        activeTab.classList.remove('lens__container__item-content__info__palette-tabs__item--active');
        activeTab.classList.add('lens__container__item-content__info__palette-tabs__item');
      }
      tab.classList.add('lens__container__item-content__info__palette-tabs__item--active');

      if (tab.id === 'white-tab') {
        palette.style.backgroundColor = '#fff';
        palette.style.color = '#1A1B1F';

        tabsContainer.style.backgroundColor = '#d6d6d6';

        whiteTab.style.backgroundColor = '#fff';
        whiteTab.style.color = '#1A1B1F';

        blackTab.style.backgroundColor = '#d6d6d6';
        blackTab.style.color = '#fff';
      } else if (tab.id === 'black-tab') {
        palette.style.backgroundColor = '';
        palette.style.color = '';

        tabsContainer.style.backgroundColor = '';

        whiteTab.style.backgroundColor = '';
        whiteTab.style.color = '';

        blackTab.style.backgroundColor = '';
        blackTab.style.color = '';
      }
    });
  });
}
