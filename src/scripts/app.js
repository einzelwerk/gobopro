import 'normalize.css';
import { initAcc } from './modules/acc';
import {
  initBenefitsSwiper,
  initBlogSwiper,
  initCatalogueSwiper,
  initDetailedProductSwiper,
  initGallerySwiper,
  initInstructionsSwiper,
  initLinksSwiper,
  initNecessitiesSwiper,
  initNewsSwiper,
  initPartnersSwiper,
  initReviewsSwiper,
  initSimilarSwiper,
  initUsageSwiper,
} from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { quizToggle, contactToggle } from './modules/modalToggle';
import { footerLinksToggle } from './modules/footerNavLinks';
import { toggleMenu } from './modules/burgerMenu';
import { initHeaderAcc } from './modules/headerAcc';
import { initProductAcc } from './modules/productInfoAcc';
import { initPortfolioGallery } from './modules/portfolioGallery';
import { initFilterToggle } from './modules/filterToggle';
import { initStickyWidget } from './modules/stickyWidget';
import { initProductsFilters } from './modules/productFilters';

// HEADER-RELATED

chooseLanguage();
toggleMenu();
initHeaderAcc();

// FOOTER-RELATED

footerLinksToggle();

// SWIPERS

initAcc();
initPartnersSwiper();
initBlogSwiper();
initBenefitsSwiper();
initGallerySwiper();
initReviewsSwiper();
initInstructionsSwiper();
initNewsSwiper();
initUsageSwiper();
initCatalogueSwiper();
initNecessitiesSwiper();
initLinksSwiper();
initDetailedProductSwiper();
initSimilarSwiper();

// PRODUCTS PAGE

initFilterToggle();

// PRODUCT PAGE

initProductAcc();

// QUIZ

quizToggle();

// CONTACT FORM

contactToggle();

// PORTFOLIO GALLERY

initPortfolioGallery();

// STICKY WIDGET

initStickyWidget();

// PRODUCTS FILTERS

initProductsFilters();

window.initRangeSlider = (selector, valueDisplay) => {
  const sliderEl = document.querySelector(selector);
  const sliderValue = document.querySelector(valueDisplay);

  if (!sliderEl) return;

  sliderValue.textContent = '2M';

  sliderEl.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = `${tempSliderValue}M`;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #6ceabd ${progress}%, #ccc ${progress}%)`;
  });
};

window.initRangeSlider('.distanceslider', '.rangeValue');
window.initRangeSlider('.sizeslider', '.rangeSizeValue');
