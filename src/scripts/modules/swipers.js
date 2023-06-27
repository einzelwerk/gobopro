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
                spaceBetween: 40,
                enabled: true,
            },
        }
    });

    return benefitsSwiper;
}