const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', event => {
  const symbols = event.currentTarget.value.length
  if (symbols < inputElement.dataset.length || symbols > 6) {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
  else {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  }
});