export function initProductAcc() {
    const accItem = document.querySelector('.more-info__acc__item');

    if (!accItem) return;
    accItem.addEventListener("click", () => {
        const accTrigger = accItem.children[1];
        const panel = accItem.children[2];

        if (panel.classList.contains("more-info__acc__body-closed") && !accTrigger.classList.contains("acc__trigger-open")) {
            accTrigger.classList.add("acc__trigger-open");
            accTrigger.style.transform = `rotate(180deg)`;
            panel.classList.remove("more-info__acc__body-closed");
        } else {
            accTrigger.classList.remove("acc__trigger-open");
            accTrigger.style.transform = `rotate(0deg)`;
            panel.classList.add("more-info__acc__body-closed");
        }
    })

}