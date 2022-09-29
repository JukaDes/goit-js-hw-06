const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', event => {
  if (event.currentTarget.value.length < inputElement.dataset.length) {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
  else {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  }
});