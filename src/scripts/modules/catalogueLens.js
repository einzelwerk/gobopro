const cataloguePictures = document.querySelectorAll('.catalogue__container__list__item-picture');

export function initCatalogueLens() {
  cataloguePictures.forEach((picture) => {
    picture.addEventListener('mouseenter', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/lens-hover-3.jpg';
    });

    picture.addEventListener('mouseleave', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/catalogue-1.png';
    });
    picture.addEventListener('pointerenter', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/lens-hover-4.jpg';
    });

    picture.addEventListener('pointerleave', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/catalogue-1.png';
    });
  });
}
