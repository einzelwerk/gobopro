import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initCatalogueSwiper, initDetailedProductSwiper, initGallerySwiper, initInstructionsSwiper, initLinksSwiper, initNecessitiesSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper, initUsageSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { quizToggle } from './modules/quizToggle';
import { footerLinksToggle } from './modules/footerNavLinks';
import { toggleMenu } from './modules/burgerMenu';
import { initHeaderAcc } from './modules/headerAcc';
import { initProductAcc } from './modules/productInfoAcc';
import { initRangeSlider } from './modules/quizSlider';

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

// PRODUCT PAGE

initProductAcc();

// QUIZ

quizToggle();
initRangeSlider();

