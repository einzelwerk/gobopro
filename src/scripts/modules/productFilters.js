const selected = document.querySelectorAll('.selected');

export function initProductsFilters() {
  if (!selected) return;

  let lastEl = null;
  selected.forEach((element) => {
    element.addEventListener('click', () => {
      element.previousElementSibling.classList.toggle('active');

      for (let i = 0; i < element.previousElementSibling.children.length; i += 1) {
        element.previousElementSibling.children[i].addEventListener('click', () => {
          // eslint-disable-next-line
          element.innerHTML = element.previousElementSibling.children[i].textContent;
          element.previousElementSibling.classList.remove('active');
          if (element.textContent.trim() !== element.parentElement.dataset.default) {
            element.parentElement.children[0].classList.add('active');
          }
        });
      }

      if (lastEl && lastEl !== element) {
        lastEl.previousElementSibling.classList.remove('active');
      }

      lastEl = element;
    });
  });
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('select-image')) {
      event.target.parentNode.classList.remove('active');
      // eslint-disable-next-line
      event.target.parentNode.nextElementSibling.nextElementSibling.textContent = `${event.target.parentNode.parentNode.dataset.default}`;
    }
  });
}
