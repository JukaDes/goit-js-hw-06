let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const functionDecrement = () => {
    value.textContent = counterValue -= 1;
}
buttonDecrement.addEventListener('click', functionDecrement);

const functionIncrement = () => {
    value.textContent = counterValue += 1;
}
buttonIncrement.addEventListener('click', functionIncrement);