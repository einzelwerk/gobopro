export function initAcc() {
  const acc = document.querySelectorAll('.acc__head');

  if (!acc) return;

  acc.forEach(accItem => {
    accItem.addEventListener("click", () => {
      const panel = accItem.nextElementSibling;
      const accTrigger = accItem.children[2];

      if (panel.classList.contains("acc__body-closed") && !accTrigger.classList.contains("acc__trigger-open")) {
        accTrigger.classList.add("acc__trigger-open");
        accTrigger.children[0].style.display = "none";
        accTrigger.children[1].style.display = "block";
        panel.classList.remove("acc__body-closed");
      } else {
        accTrigger.classList.remove("acc__trigger-open");
        accTrigger.children[0].style.display = "block";
        accTrigger.children[1].style.display = "none";
        panel.classList.add("acc__body-closed");
      }
    })
  })
}