window.addEventListener('load', () => {
  const sliderEl = document.querySelector('#range2');
  const sliderFilter = document.querySelector('.filterRange');
  const sliderValue = document.querySelector('.rangeValue');
  const sliderValueFilter = document.querySelector('.rangeValueFilter');

  if (!sliderEl || !sliderFilter || !sliderValue || !sliderValueFilter) return;

  sliderValue.textContent = '2M';

  sliderEl.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = `${tempSliderValue}M`;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #6ceabd ${progress}%, #ccc ${progress}%)`;
  });

  sliderValueFilter.textContent = '2M';

  sliderFilter.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value;
    sliderValueFilter.textContent = `${tempSliderValue}M`;

    const progress = (tempSliderValue / sliderFilter.max) * 100;

    sliderFilter.style.background = `linear-gradient(to right, #6ceabd ${progress}%, #ccc ${progress}%)`;
  });
});
