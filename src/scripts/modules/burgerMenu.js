export function toggleMenu() {
    const menu = document.querySelector(".menu");
    const openBtn = document.querySelector(".menu__burger");

    if (!menu || !openBtn) return;

    openBtn.addEventListener('click', () => {
        if (menu.classList.contains('menu_active')) {
            menu.classList.remove('menu_active');
            openBtn.classList.remove('menu__burger_active');
            document.body.style.overflow = "auto";
            return;
        }
        menu.classList.add('menu_active');
        openBtn.classList.add('menu__burger_active');
        document.body.style.overflow = 'hidden';
    });
}