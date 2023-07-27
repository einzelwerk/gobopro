const selected = document.querySelectorAll('.selected');
const activeOptions = document.querySelectorAll('.label-active');

export function initProductsFilters() {
  if (!selected) return;

  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.classList.toggle('active');

      for (let i = 0; i < element.previousElementSibling.children.length; i += 1) {
        element.previousElementSibling.children[i].addEventListener('click', () => {
          if (
            element.previousElementSibling.children[i].children[1].children[0].closest('.option').querySelector('input')
              .checked === false
          ) {
            // eslint-disable-next-line
            element.previousElementSibling.children[i].children[1].children[0].classList.add('active');
            // eslint-disable-next-line
            element.previousElementSibling.children[i].children[1].children[0]
              .closest('.option')
              .querySelector('input').checked = true;
          }
          // eslint-disable-next-line
          element.innerHTML = element.previousElementSibling.children[i].textContent;
          element.previousElementSibling.classList.remove('active');
        });
      }
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
