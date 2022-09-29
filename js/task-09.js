function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const textColor = document.querySelector('span');
const button = document.querySelector('button');

button.addEventListener('click', changeColor);

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyColor.style.backgroundColor;
}