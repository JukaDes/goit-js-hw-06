const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

inputElement.addEventListener('input', event => {
  spanElement.style.fontSize = `${event.currentTarget.value}px`;
});