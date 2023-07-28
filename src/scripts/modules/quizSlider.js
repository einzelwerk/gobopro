window.initRangeSlider = (selector) => {
  const sliderEl = document.querySelector(selector);
  const sliderValue = document.querySelector('.rangeValue');

  if (!sliderEl) return;

  sliderValue.textContent = '2M';

  sliderEl.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = `${tempSliderValue}M`;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #6ceabd ${progress}%, #ccc ${progress}%)`;
  });
};

window.initRangeSlider('.distanceslider');
