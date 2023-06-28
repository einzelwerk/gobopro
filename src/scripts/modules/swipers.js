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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
                spaceBetween: 40,
                enabled: true,
            },
        }
    });

    return newsSwiper;
}