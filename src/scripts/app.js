import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initCatalogueSwiper, initDetailedProductSwiper, initGallerySwiper, initInstructionsSwiper, initLinksSwiper, initNecessitiesSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper, initUsageSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { quizToggle, contactToggle } from './modules/modalToggle';
import { footerLinksToggle } from './modules/footerNavLinks';
import { toggleMenu } from './modules/burgerMenu';
import { initHeaderAcc } from './modules/headerAcc';
import { initProductAcc } from './modules/productInfoAcc';
import { initRangeSlider } from './modules/quizSlider';
import { initPortfolioGallery } from './modules/portfolioGallery';
import { initFilterToggle } from './modules/filterToggle';

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

// PRODUCTS PAGE

initFilterToggle();

// PRODUCT PAGE

initProductAcc();

// QUIZ

quizToggle();
initRangeSlider();

// CONTACT FORM

contactToggle();

// PORTFOLIO GALLERY

initPortfolioGallery();
