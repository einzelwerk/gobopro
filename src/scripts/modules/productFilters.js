const selected = document.querySelectorAll('.selected');
const activeOptions = document.querySelectorAll('.label-active');

export function initProductsFilters() {
  if (!selected) return;

  let lastEl = null;
  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.classList.add('active');

      for (let i = 0; i < element.previousElementSibling.children.length; i += 1) {
        element.previousElementSibling.children[i].addEventListener('click', () => {
          // eslint-disable-next-line
          element.innerHTML = element.previousElementSibling.children[i].textContent;
          element.previousElementSibling.classList.remove('active');
        });
      }

      if (lastEl && lastEl !== element) {
        lastEl.previousElementSibling.classList.remove('active');
      }

      lastEl = element;
    });
  });

  activeOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
        // eslint-disable-next-line
        option.closest('.option').querySelector('input').checked = false;
        event.stopPropagation();
      }
    });
  });
}
