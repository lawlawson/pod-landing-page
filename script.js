// function validateEmail(emailId) {
//   const mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//   if(emailId.value.match(mailformat)) {
//     document.form1.text1.focus();
//     return true;
//   } else {
//     alert('Invalid email address');
//     document.form1.text1.focus();
//     return false;
//   }
// }

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
