export function initFilterToggle() {
  const filterToggle = document.querySelector('.products__container__mobile-filter');
  const filterClose = document.querySelector('.mobile-filter__back');
  const filterMobile = document.querySelector('.mobile-filter');

  if (!filterClose && !filterMobile && !filterToggle) return;

  filterToggle.addEventListener('click', () => {
    if (!filterMobile || filterMobile.style.display === 'none' || filterMobile.style.display === '') {
      filterMobile.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    } else {
      filterMobile.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  filterClose.addEventListener('click', () => {
    filterMobile.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}
