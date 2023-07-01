import 'normalize.css';
import { initAcc } from './modules/acc';
import { initBenefitsSwiper, initBlogSwiper, initCatalogueSwiper, initGallerySwiper, initInstructionsSwiper, initNewsSwiper, initPartnersSwiper, initReviewsSwiper, initUsageSwiper } from './modules/swipers';
import { chooseLanguage } from './modules/languages';
import { navLinksToggle } from './modules/headerNavLinks';
import { footerLinksToggle } from './modules/footerNavLinks';
import { toggleMenu } from './modules/burgerMenu';
import { initHeaderAcc } from './modules/headerAcc';
import { initProductAcc } from './modules/productInfoAcc';

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
initUsageSwiper();
initCatalogueSwiper();

// PRODUCT PAGE

initProductAcc();

