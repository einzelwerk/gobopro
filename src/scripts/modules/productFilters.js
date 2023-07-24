const selected = document.querySelectorAll('.selected');

export function initProductsFilters() {
  if (!selected) return;

  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.classList.toggle('active');

      for (let i = 0; i < element.previousElementSibling.children.length; i += 1) {
        element.previousElementSibling.children[i].addEventListener('click', () => {
          // eslint-disable-next-line
          element.innerHTML = element.previousElementSibling.children[i].innerHTML;
          element.previousElementSibling.classList.remove('active');
        });
      }
    });
  });
}
