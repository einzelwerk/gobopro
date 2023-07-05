export function initHeaderAcc() {
    const acc = document.querySelectorAll('.menu__nav-item');
    const accLink = document.querySelectorAll('.header-1-4__nav-item__link__mobile');
    const accInner = document.querySelector('.menu__nav');
    const navProductMobile = document.querySelector('.header-1-4__nav-inner__product');
    const navIndustryMobile = document.querySelector('.header-1-4__nav-inner__industry');
    const navNewsMobile = document.querySelector('.header-1-4__nav-inner__news');

    const closeNavProduct = document.querySelector('.menu__back-product');
    const closeNavIndustry = document.querySelector('.menu__back-industry');
    const closeNavNews = document.querySelector('.menu__back-news');

    if (!acc) return;

    acc.forEach(accItem => {
        accItem.addEventListener("click", () => {
            accInner.style.display = "none";

            switch (accItem.dataset.acc) {
                case 'product':
                    if (!navProductMobile.style.display || navProductMobile.style.display === 'none') {
                        navProductMobile.style.display = "flex";
                    } else {
                        navProductMobile.style.display = "none";
                    }
                    break;
                case 'industry':
                    if (!navIndustryMobile.style.display || navIndustryMobile.style.display === 'none') {
                        navIndustryMobile.style.display = "flex";
                    } else {
                        navIndustryMobile.style.display = "none";
                    }
                    break;
                case 'news':
                    if (!navNewsMobile.style.display || navNewsMobile.style.display === 'none') {
                        navNewsMobile.style.display = "flex";
                    } else {
                        navNewsMobile.style.display = "none";
                    }
                    break;
                default:
                    break;
            }
        })
    })

    accLink.forEach(accLinkItem => {
        accLinkItem.addEventListener('click', () => {
            const panel = accLinkItem.nextElementSibling;
            const accTrigger = accLinkItem.children[0];

            if (panel.classList.contains("header-acc__body-closed") && !accTrigger.classList.contains("acc__trigger-open")) {
                accTrigger.classList.add("acc__trigger-open");
                accTrigger.style.transform = `rotate(180deg)`;
                panel.classList.remove("header-acc__body-closed");
            } else {
                accTrigger.classList.remove("acc__trigger-open");
                accTrigger.style.transform = `rotate(0deg)`;
                panel.classList.add("header-acc__body-closed");
            }
        })
    })


    closeNavProduct.addEventListener('click', () => {
        navProductMobile.style.display = "none";
        accInner.style.display = "block";
    })

    closeNavIndustry.addEventListener('click', () => {
        navIndustryMobile.style.display = "none";
        accInner.style.display = "block";
    })

    closeNavNews.addEventListener('click', () => {
        navNewsMobile.style.display = "none";
        accInner.style.display = "block";
    })


    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            document.body.style.overflow = 'auto';

            if (document.querySelector('.menu').classList.contains("menu_active")) {
                document.querySelector('.menu').classList.remove("menu_active");
                document.querySelector('.menu__content').style.display = "none";

            }
        }
    })
}