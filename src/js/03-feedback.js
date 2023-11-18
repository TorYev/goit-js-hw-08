import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let formData = {};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData) {
    formData = savedData;
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
});

form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
