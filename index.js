import { getTodos, createTodo } from './api/Todos';

import { clock } from './src/clock';
import { clearForm } from './src/clearForm';

import { displayTodos } from './src/displayTodos';

import { getInputForm } from './src/getInputForm';
import { validate } from './src/formValidate';
import { addContactFormBtnListener } from './src/addContactFormBtnListener';
import { addFormBlurEventListener } from './src/addFormBlurEventListener';
import { renderContactsForm } from './src/renderContactsForm';
import { displayBeforeBegin, displayAfterBegin } from './src/display';
import { renderInputForm } from './src/renderInputForm';

let globalCheck;

const form = document.querySelector('#inputForm');

const inputForm = document.querySelector('#inputForm');

// show clock
clock();
// display Todos
// getTodos().then((data) => {
//   displayResult.innerHTML = renderDatas(data);
// });

const output = renderInputForm();

displayAfterBegin(output, inputForm);

getTodos().then((data) => displayTodos(data));

// Event Listener

console.log('addContactFormListener =.= ');
addContactFormBtnListener();
addFormBlurEventListener();

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

  // 表格驗證
  const check = validate();

  // globalCheck = check;
  // console.log(globalCheck);

  if (
    check.title &&
    check.deadlineDate &&
    check.deadlineTime &&
    check.contracts
  ) {
    checkInputFlag = true;
  }
  // 驗證通過
  if (checkInputFlag) {
    // api 建立todo
    createTodo(input);
    //清除表格 (裡面有移除所有contacts)
    clearForm();
    // renderContactsForm({})新增 contact 空白表格
    const output = renderContactsForm({});
    const contactFormBtnParent = document.querySelector('#contactFormBtn')
      .parentElement;
    // displayBeforeBegin 插入 contact 表格
    displayBeforeBegin(output, contactFormBtnParent);
    // 新增空白表格 + 插入表格
    addContactFormBtnListener();

    // 新增 BlurEventListener if form新增的input沒有'blurListener' 的 attribute
    addFormBlurEventListener();
  }
});
