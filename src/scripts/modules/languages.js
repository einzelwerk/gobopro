export function chooseLanguage() {
    const langMenu = document.querySelector(".header-1-4__contacts-lang");
    const langMenuDropdown = document.querySelector(".header-1-4__contacts-lang__dropdown");

    if (!langMenu) return;

    langMenu.addEventListener("click", () => {
        if (window.getComputedStyle(langMenuDropdown).getPropertyValue('display') === "none") {
            langMenuDropdown.style.display = "flex";
        } else {
            langMenuDropdown.style.display = "none";
        }
    })
}