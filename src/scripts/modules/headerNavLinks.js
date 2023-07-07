export function navLinksToggle() {
    const links = document.querySelectorAll('.header-1-4__nav-item');
    const megamenu = document.querySelector('.megamenu');
    const navProduct = document.querySelector('.megamenu__container-product');
    const navIndustry = document.querySelector('.megamenu__container-industry');
    const navNews = document.querySelector('.megamenu__container-news');

    if (!links) return;

    links.forEach(link => {
        link.addEventListener("mouseover", () => {

            const linkDropdownIcon = link.children[1];

            if (link.children.length > 1) {
                // if (!link.classList.contains("active")) {
                //     link.classList.add("active");
                //     megamenu.classList.add("active");
                //     linkDropdownIcon.style.transform = `rotate(180deg)`;
                // }
                switch (link.dataset.toggle) {
                    case 'product':
                        if (!navProduct.style.display || navProduct.style.display === "none") {
                            megamenu.classList.add("active");
                            navProduct.classList.add("active");
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        }
                        break;
                    case 'industry':
                        if (!navIndustry.style.display || navIndustry.style.display === "none") {
                            megamenu.classList.add("active");
                            navIndustry.classList.add("active");
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        }
                        break;
                    case 'news':
                        if (!navNews.style.display || navNews.style.display === "none") {
                            megamenu.classList.add("active");
                            navNews.classList.add("active");
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        }
                        break;
                    default:
                        break;
                }
            }
        })
        megamenu.addEventListener("mouseleave", () => {

            const linkDropdownIcon = link.children[1];

            if (link.children.length > 1) {
                switch (link.dataset.toggle) {
                    case 'product':
                        if (navProduct.style.display === "block" || navProduct.classList.contains("active")) {
                            megamenu.classList.remove("active");
                            navProduct.classList.remove("active");
                            linkDropdownIcon.style.transform = `rotate(0deg)`;
                        }
                        break;
                    case 'industry':
                        if (navIndustry.style.display === "block" || navIndustry.classList.contains("active")) {
                            megamenu.classList.remove("active");
                            navIndustry.classList.remove("active");
                            linkDropdownIcon.style.transform = `rotate(0deg)`;
                        }
                        break;
                    case 'news':
                        if (navNews.style.display === "block" || navNews.classList.contains("active")) {
                            megamenu.classList.remove("active");
                            navNews.classList.remove("active");
                            linkDropdownIcon.style.transform = `rotate(0deg)`;
                        }
                        break;
                    default:
                        break;
                }
            }
        })
    });
}