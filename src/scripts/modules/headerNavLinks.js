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
                switch (link.dataset.toggle) {
                    case 'product':
                        if (!navProduct.style.display || navProduct.style.display === "none") {
                            megamenu.classList.add("active");
                            navProduct.style.display = "block";
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        } else {
                            megamenu.classList.remove("active");
                            navProduct.style.display = "none";
                            linkDropdownIcon.style.transform = `rotate(0deg)`;
                        }
                        break;
                    case 'industry':
                        if (!navIndustry.style.display || navIndustry.style.display === "none") {
                            megamenu.classList.add("active");
                            navIndustry.style.display = "block";
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        } else {
                            megamenu.classList.remove("active");
                            navIndustry.style.display = "none";
                            linkDropdownIcon.style.transform = `rotate(0deg)`;
                        }
                        break;
                    case 'news':
                        if (!navNews.style.display || navNews.style.display === "none") {
                            megamenu.classList.add("active");
                            navNews.style.display = "block";
                            linkDropdownIcon.style.transform = `rotate(180deg)`;
                        } else {
                            megamenu.classList.remove("active");
                            navNews.style.display = "none";
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