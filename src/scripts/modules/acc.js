export function initAcc() {
  document.querySelectorAll('.acc').forEach((acc) => {
    acc.querySelectorAll('.acc__item').forEach((accItem) => {
      const accTriggerCol = accItem.querySelectorAll(['.acc__trigger']);
      const accBody = accItem.querySelector('.acc__body');

      accTriggerCol.forEach((accTrigger) => {
        accTrigger.addEventListener('click', () => {
          acc.querySelectorAll('.acc__item_active').forEach((activeAccItem) => {
            if (accItem === activeAccItem) return;

            const activeAccBody = activeAccItem.querySelector('.acc__body');

            activeAccItem.classList.remove('acc__item_active');
            activeAccBody.style.maxHeight = null;
          });

          accItem.classList.toggle('acc__item_active');
          accBody.style.maxHeight = accBody.style.maxHeight ? null : `${accBody.scrollHeight}px`;
        });
      });
    });
  });
}