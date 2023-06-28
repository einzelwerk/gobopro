import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initGallerySwiper, initInstructionsSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { navLinksToggle } from './modules/headerNavLinks';

// HEADER LANGUAGE

chooseLanguage();

// HEADER NAV LINKS

navLinksToggle();


// SWIPERS

initAcc();
initPartnersSwiper();
initBlogSwiper();
initBenefitsSwiper();
initGallerySwiper();
initReviewsSwiper();
initInstructionsSwiper();
initNewsSwiper();