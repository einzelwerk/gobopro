export function navLinksToggle() {
    const links = document.querySelectorAll('.header-1-4__nav-item');

    if (!links) return;

    links.forEach(link => {
        link.addEventListener("click", () => {
            const linkDropdownContent = link.children[2];
            const linkDropdownIcon = link.children[1];

            if (link.children.length > 1) {
                if (!link.children[2].style.display || link.children[2].style.display === "none") {
                    linkDropdownContent.style.display = "flex";
                    linkDropdownIcon.style.transform = `rotate(180deg)`;
                } else {
                    linkDropdownContent.style.display = "none";
                    linkDropdownIcon.style.transform = `rotate(0deg)`;
                }
            }
        })
    });
}