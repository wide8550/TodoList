import { displayAfterBegin } from './display';
import { renderDatas } from './renderDatas';

import { removeDisplay } from './removeDisplay';
import { getTodo, editTodo, deleteTodo } from '../api/Todos';
import { renderInputForm } from './renderInputForm';
import { getInputForm } from './getInputForm';

import { addContactFormBtnListener } from './addContactFormBtnListener';
import { addFormBlurEventListener } from './addFormBlurEventListener';

import { pageScroll } from '../utils/pageScroll';

const displayResult = document.getElementById('showTodo');
const displayFinishedResult = document.getElementById('completeTodo');

import { validate } from './formValidate';
import { clearForm } from './clearForm';
export const displayTodos = (data) => {
  const { output, finishedOutput } = renderDatas(data);
  const TodosParent = document.getElementById('showTodo');
  removeDisplay(TodosParent);

  // console.log(displayResult.children);
  displayAfterBegin(output, displayResult);
  displayAfterBegin(finishedOutput, displayFinishedResult);

  // finish btn
  const finishBtns = document.querySelectorAll('.finishBtn');

  // finished btn
  const finishedBtns = document.querySelectorAll('.finishedBtn');
  // edit btn
  const editBtns = document.querySelectorAll('.editBtn');
  // delete btn
  const deleteBtns = document.querySelectorAll('.deleteBtn');

  // finish Btn click event listener
  finishBtns.forEach((finishBtn) => {
    finishBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('finish');
      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');

      editTodo(currentTodoId, { finished: true });
    });
  });
  finishedBtns.forEach((finishedBtn) => {
    finishedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('undone finish');
      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');
      editTodo(currentTodoId, { finished: false });
    });
  });

  // edit Btn click event listener
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // for checking if input field is all validated, ready to submit edit
      let checkInputFlag = false;

      const inputForm = document.querySelector('#inputForm');
      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');
      // render input form from data
      pageScroll(inputForm);

      getTodo(currentTodoId).then((data) => {
        const output = renderInputForm(data);
        removeDisplay(inputForm);
        displayAfterBegin(output, inputForm);
        addContactFormBtnListener();
        addFormBlurEventListener();

        const editTodoBtn = document.querySelector('#editTodoBtn');

        const cancelEditBtn = document.querySelector('#cancelEditBtn');

        // 送出編輯按鈕
        editTodoBtn.addEventListener('click', editTodos);
        function editTodos() {
          console.log('Submit Edit!');
          const input = getInputForm();
          const deadline = input.deadline.deadlineTime
            ? input.deadline.deadlineDate + ' ' + input.deadline.deadlineTime
            : input.deadline.deadlineDate;
          input.deadline = deadline;
          // console.log(input);
          const check = validate();
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
            // api 編輯todo
            editTodo(currentTodoId, input);
            //清除表格 (裡面有移除所有contacts)
            clearForm();

            // 重新 render input form 因為加了 edit cancel btn
            // inputForm.innerHTML = renderInputForm();
            const output = renderInputForm();
            removeDisplay(inputForm);
            displayAfterBegin(output, inputForm);

            // 新增空白表格 + 插入表格
            addContactFormBtnListener();

            // 新增 BlurEventListener if form新增的input沒有'blurListener' 的 attribute
            addFormBlurEventListener();

            // addContactFormBtnListener();
            pageScroll(currentTodo);
          }
        }
        cancelEditBtn.addEventListener('click', () => {
          editTodoBtn.removeEventListener('click', editTodos);
          inputForm.innerHTML = renderInputForm();
          addContactFormBtnListener();
          addFormBlurEventListener();
        });
      });
    });
  });

  // delete Btn click event listener
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('delete');

      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');
      var confirmDelete = confirm('Are you sure you want to delete this todo?');
      // console.log(currentTodo);
      if (confirmDelete) {
        deleteTodo(currentTodoId);
      }
    });
  });
};
