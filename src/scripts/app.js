import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initGallerySwiper, initInstructionsSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { navLinksToggle } from './modules/headerNavLinks';
import { footerLinksToggle } from './modules/footerNavLinks';
import { toggleMenu } from './modules/burgerMenu';
import { initHeaderAcc } from './modules/headerAcc';

// HEADER-RELATED

chooseLanguage();
navLinksToggle();
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

