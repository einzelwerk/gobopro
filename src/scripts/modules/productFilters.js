const selected = document.querySelectorAll('.selected');

export function initProductsFilters() {
  if (!selected) return;

  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.classList.toggle('active');

      for (let i = 0; i < element.previousElementSibling.children.length; i += 1) {
        element.previousElementSibling.children[i].addEventListener('click', () => {
          if (!element.previousElementSibling.children[i].children[1].children[0].classList.contains('active')) {
            // eslint-disable-next-line
            element.previousElementSibling.children[i].children[1].children[0].classList.add('active');
          }
          // eslint-disable-next-line
          element.innerHTML = element.previousElementSibling.children[i].textContent;
          element.previousElementSibling.classList.remove('active');
        });
      }
    });
  });
}
