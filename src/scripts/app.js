import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initGallerySwiper, initInstructionsSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';

// HEADER LANGUAGE

chooseLanguage();


// SWIPERS

initAcc();
initPartnersSwiper();
initBlogSwiper();
initBenefitsSwiper();
initGallerySwiper();
initReviewsSwiper();
initInstructionsSwiper();
initNewsSwiper();