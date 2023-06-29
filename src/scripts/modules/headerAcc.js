export function initHeaderAcc() {
    const acc = document.querySelectorAll('.header-acc__head');

    if (!acc) return;

    acc.forEach(accItem => {
        accItem.addEventListener("click", () => {
            const panel = accItem.nextElementSibling;
            const accTrigger = accItem.children[1];

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

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            document.body.style.overflow = 'auto';
        }
    })
}