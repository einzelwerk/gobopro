import Swiper, { Scrollbar } from 'swiper';
import 'swiper/swiper.css';

export function initPartnersSwiper() {
    const partnersSwiper = new Swiper('.partners-swiper', {
        modules: [Scrollbar],
        autoplay: {
            delay: 5000,
        },
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            dragClass: 'swiper-scrollbar-drag',
            enabled: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
                enabled: true,
            },
            768: {
                rows: 2,
                enabled: true,
            },
        }
    });

    return partnersSwiper;
}

export function initBlogSwiper() {
    const blogSwiper = new Swiper('.blog-swiper', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        navigation: {
            nextEl: '.blog-3-1__slider-btn_next',
            prevEl: '.blog-3-1__slider-btn_prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
                enabled: true,
            },
            768: {
                rows: 2,
                enabled: true,
            },
        }
    });

    return blogSwiper;
}