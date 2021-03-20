import { validate } from './formValidate';

const form = document.querySelector('#inputForm');

export const addFormBlurEventListener = () => {
  form.querySelectorAll('input').forEach((input) =>
    input.addEventListener('blur', () => {
      validate();
      // globalCheck = check;
      // console.log(globalCheck);
    })
  );
};
