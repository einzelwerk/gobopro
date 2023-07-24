import Swiper, { Navigation, Scrollbar } from 'swiper';
import 'swiper/swiper.css';

export function initPartnersSwiper() {
  const partnersSwiper = new Swiper('.partners-swiper', {
    modules: [Scrollbar],
    autoplay: {
      delay: 5000,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      dragClass: 'swiper-scrollbar-drag',
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
      768: {
        spaceBetween: 40,
        enabled: true,
      },
    },
  });

  return partnersSwiper;
}

export function initBlogSwiper() {
  const blogSwiper = new Swiper('.blog-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.blog-swiper-btn_next',
      prevEl: '.blog-swiper-btn_prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        rows: 2,
        enabled: true,
      },
    },
  });

  return blogSwiper;
}

export function initBenefitsSwiper() {
  const benefitsSwiper = new Swiper('.benefits-swiper', {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        enabled: true,
      },
    },
  });

  return benefitsSwiper;
}

export function initGallerySwiper() {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.gallery-swiper-btn_next',
      prevEl: '.gallery-swiper-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 40,
        enabled: true,
      },
    },
  });

  return gallerySwiper;
}

export function initReviewsSwiper() {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.reviews-swiper-btn_next',
      prevEl: '.reviews-swiper-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        enabled: true,
      },
    },
  });

  return reviewsSwiper;
}

export function initInstructionsSwiper() {
  const instructionsSwiper = new Swiper('.instructions-swiper', {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
    },
  });

  return instructionsSwiper;
}

export function initNewsSwiper() {
  const newsSwiper = new Swiper('.news-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.news-swiper-btn_next',
      prevEl: '.news-swiper-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        enabled: true,
      },
    },
  });

  return newsSwiper;
}

export function initUsageSwiper() {
  const usageSwiper = new Swiper('.usage-swiper', {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        enabled: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
        enabled: true,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 20,
        enabled: true,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 20,
        enabled: true,
      },
    },
  });

  return usageSwiper;
}

export function initCatalogueSwiper() {
  const catalogueSwiper = new Swiper('.catalogue-swiper', {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        enabled: true,
      },
    },
  });

  return catalogueSwiper;
}

export function initSimilarSwiper() {
  const catalogueSwiper = new Swiper('.similar-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.similar-swiper-btn_next',
      prevEl: '.similar-swiper-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        enabled: true,
      },
    },
  });

  return catalogueSwiper;
}

export function initNecessitiesSwiper() {
  const necessitiesSwiper = new Swiper('.necessities-swiper', {
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
        enabled: true,
      },
    },
  });

  return necessitiesSwiper;
}

export function initLinksSwiper() {
  const linksSwiper = new Swiper('.links-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.links-swiper-btn_next',
      prevEl: '.links-swiper-btn_prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        rows: 2,
        enabled: true,
      },
    },
  });

  return linksSwiper;
}

export function initDetailedProductSwiper() {
  const detailedSwiper = new Swiper('.detailed-swiper', {
    modules: [Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.detailed-swiper-btn_next',
      prevEl: '.detailed-swiper-btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        enabled: true,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 40,
        enabled: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        enabled: true,
      },
    },
  });

  return detailedSwiper;
}
