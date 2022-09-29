
const form = document.querySelector('.login-form');
const emailElement = form.firstElementChild;
const passwordElement = emailElement.nextElementSibling;

form.addEventListener('submit', event => {
    event.preventDefault();
    
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please Complete The Form Below!!!');
  }

  const userData = {};
  userData[emailElement.outerText] = email.value;
  userData[passwordElement.outerText] = password.value;
  console.log(userData);

  event.currentTarget.reset();
});