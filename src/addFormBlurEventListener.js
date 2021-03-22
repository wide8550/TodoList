import { validate } from './formValidate';

const form = document.querySelector('#inputForm');
// 新增 BlurEventListener if form新增的input沒有'blurListener' 的 attribute
export const addFormBlurEventListener = () => {
  form.querySelectorAll('input').forEach((input) => {
    if (input.getAttribute('blurListener') !== 'true') {
      input.addEventListener('blur', (e) => {
        const target = e.target;
        target.setAttribute('blurListener', 'true');
        validate();
      });
    }
  });
  // globalCheck = check;
  // console.log(globalCheck);
};
