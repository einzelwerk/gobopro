const sliderValue = document.querySelector(".slider span");
const inputSlider = document.querySelector(".slider input");

function updateSliderTrack(value) {
    const w = value * (parseInt(window.getComputedStyle(inputSlider).getPropertyValue('width'), 10)) / 100;
    inputSlider.style.boxShadow = `inset ${w}px 0 #6CEABD`;
}

export function initRangeSlider() {
    inputSlider.addEventListener('input', () => {
        const { value } = inputSlider.value;
        sliderValue.textContent = `${value}M`;
        updateSliderTrack(value);
    });
}

