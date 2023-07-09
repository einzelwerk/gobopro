const sliderValue = document.querySelector(".slider span");
const inputSliders = document.querySelectorAll(".slider input");


export function initRangeSlider() {
    inputSliders.forEach(inputSlider => {
        inputSlider.addEventListener('input', () => {
            // eslint-disable-next-line
            const value = inputSlider.value;
            console.log(value);
            const w = value * (parseInt(window.getComputedStyle(inputSlider).getPropertyValue('width'), 10)) / 100;
            // eslint-disable-next-line
            inputSlider.style.boxShadow = `inset ${w}px 0 #6CEABD`;
            sliderValue.textContent = `${value}M`;
        });
    })
}

