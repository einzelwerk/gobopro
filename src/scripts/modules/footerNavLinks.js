/* eslint-disable no-param-reassign */
export function footerLinksToggle() {
    const links = document.querySelectorAll('.footer-3__item');

    if (!links) return;

    links.forEach(link => {
        link.addEventListener("click", () => {
            const linkDropdownContent = link.children[1];
            const linkDropdownIcon = link.children[0].children[1];
            if (window.innerWidth < 769) {
                if (link.children.length > 1) {
                    if (!linkDropdownContent.style.display || linkDropdownContent.style.display === "none") {
                        linkDropdownContent.style.display = "flex";
                        linkDropdownIcon.style.transform = `rotate(180deg)`;
                    } else {
                        linkDropdownContent.style.display = "none";
                        linkDropdownIcon.style.transform = `rotate(0deg)`;
                    }
                }
            }
        })
    });

    window.addEventListener('resize', () => {
        const footerNavItems = document.querySelectorAll('.footer-3__nav');
        if (window.innerWidth > 769) {

            footerNavItems.forEach((navItem) => {
                navItem.style.display = "flex";
            });
        } else {
            footerNavItems.forEach((navItem) => {
                navItem.style.display = "none";
            });
        }
    })
}