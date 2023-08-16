const cataloguePictures = document.querySelectorAll('.catalogue__container__list__item-picture');

export function initCatalogueLens() {
  cataloguePictures.forEach((picture) => {
    const oldPicture = picture.children[0].src;

    picture.addEventListener('mouseenter', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/lens-hover-1.jpg';
    });

    picture.addEventListener('mouseleave', () => {
      // eslint-disable-next-line
      picture.children[0].src = oldPicture;
    });
    picture.addEventListener('pointerenter', () => {
      // eslint-disable-next-line
      picture.children[0].src = './assets/images/lens-hover-1.jpg';
    });

    picture.addEventListener('pointerleave', () => {
      // eslint-disable-next-line
      picture.children[0].src = oldPicture;
    });
  });
}
