const form = document.querySelector('form');
const input = document.querySelector('.email_address');
const spanErr = document.querySelector('.error_message');

input.addEventListener('invalid', () => {
  spanErr.classList.add('showError');
});
input.addEventListener('input', () => {
  spanErr.classList.remove('showError');
});
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Your form has been submitted, Thank you');
  input.value = '';
});
