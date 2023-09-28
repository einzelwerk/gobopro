export function toggleMenu() {
  const menu = document.querySelector('.menu');
  const content = document.querySelector('.menu__content');
  const burgerMenuIcon = document.querySelector('.menu__burger__icon');

  if (!menu || !content) return;

  menu.addEventListener('click', () => {
    if (menu.classList.contains('menu_active')) {
      menu.classList.remove('menu_active');
      burgerMenuIcon.src = './assets/images/hamburger-open.svg';
      content.style.display = 'none';
      content.style.transform = `translateX(-200px)`;
      document.body.style.overflow = 'auto';
      return;
    }
    menu.classList.add('menu_active');
    burgerMenuIcon.src = './assets/images/burger-close.svg';
    content.style.display = 'flex';
    content.style.transform = `translateX(0px)`;
    document.body.style.overflow = 'hidden';
  });

  content.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}
