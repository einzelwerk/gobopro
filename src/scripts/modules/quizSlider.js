const sliderValue = document.querySelector(".slider span");
const inputSliders = document.querySelectorAll(".slider input");


export function initRangeSlider() {
    inputSliders.forEach(inputSlider => {
        inputSlider.addEventListener('input', () => {
            // eslint-disable-next-line
            const value = inputSlider.value;
            const w = value * (parseInt(window.getComputedStyle(inputSlider).getPropertyValue('width'), 10)) / 100;
            // inputSlider.style.boxShadow = `inset ${w}px 0 #6CEABD`;
            // eslint-disable-next-line
            inputSlider.style.background = `linear-gradient(to right, #6CEABD ${w}%, #ccc ${w}%)`;
            sliderValue.textContent = `${value}M`;
        });
    })

}

