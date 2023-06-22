/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/acc.js
function initAcc() {
  document.querySelectorAll('.acc').forEach(function (acc) {
    acc.querySelectorAll('.acc__item').forEach(function (accItem) {
      var accTriggerCol = accItem.querySelectorAll(['.acc__trigger']);
      var accBody = accItem.querySelector('.acc__body');
      accTriggerCol.forEach(function (accTrigger) {
        accTrigger.addEventListener('click', function () {
          acc.querySelectorAll('.acc__item_active').forEach(function (activeAccItem) {
            if (accItem === activeAccItem) return;
            var activeAccBody = activeAccItem.querySelector('.acc__body');
            activeAccItem.classList.remove('acc__item_active');
            activeAccBody.style.maxHeight = null;
          });
          accItem.classList.toggle('acc__item_active');
          accBody.style.maxHeight = accBody.style.maxHeight ? null : "".concat(accBody.scrollHeight, "px");
        });
      });
    });
  });
}
;// CONCATENATED MODULE: ./src/scripts/app.js


initAcc();
/******/ })()
;