import { getTodos, createTodo } from './api/Todos';

import { clock } from './src/clock';
import { clearForm } from './src/clearForm';

import { displayTodos } from './src/displayTodos';

import { addContactFormBtnListener } from './src/addContactFormBtnListener';
import { getInputForm } from './src/getInputForm';
import { validate } from './src/formValidate';
import { addFormBlurEventListener } from './src/addFormBlurEventListener';

const submitBtn = document.getElementById('submitTodo');
const form = document.querySelector('#inputForm');
let globalCheck;

// show clock
clock();
// display Todos
// getTodos().then((data) => {
//   displayResult.innerHTML = renderDatas(data);
// });
getTodos().then((data) => displayTodos(data));

// validate();

// Event Listener

addContactFormBtnListener();

// submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const form = document.querySelector('#inputForm');
  let checkInputFlag = false;
  console.log('submit');
  const input = getInputForm();
  input.finished = false;
  const deadline = input.deadline.deadlineTime
    ? input.deadline.deadlineDate + ' ' + input.deadline.deadlineTime
    : input.deadline.deadlineDate;
  input.deadline = deadline;
  console.log(input);
  const check = validate();

  globalCheck = check;
  console.log(globalCheck);

  // console.log(check);
  if (
    check.title &&
    check.deadlineDate &&
    check.deadlineTime &&
    check.contracts
  ) {
    checkInputFlag = true;
  }
  if (checkInputFlag) {
    createTodo(input);
    clearForm();
  }
});

addFormBlurEventListener();
// form.querySelectorAll('input').forEach((input) =>
//   input.addEventListener('blur', () => {
//     const check = validate();
//     globalCheck = check;
//     console.log(globalCheck);
//   })
// );
