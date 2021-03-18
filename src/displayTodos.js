import { displayAfterBegin, displayAfterEnd } from './display';
import { renderDatas } from './renderDatas';

import { removeDisplay } from './removeDisplay';
import { getTodo, editTodo, deleteTodo } from '../api/Todos';
import { renderInputForm } from './renderInputForm';
import { getInputForm } from './getInputForm';
import { clearForm } from './clearForm';
import { addContactFormBtnListener } from './addContactFormBtnListener';

import { pageScroll } from '../utils/pageScroll';

const displayResult = document.getElementById('showTodo');
const displayFinishedResult = document.getElementById('completeTodo');

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
      const inputForm = document.querySelector('#inputForm');
      pageScroll(inputForm);
      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');
      getTodo(currentTodoId).then((data) => {
        inputForm.innerHTML = renderInputForm(data);
        addContactFormBtnListener();
        const editTodoBtn = document.querySelector('#editTodoBtn');
        const cancelEditBtn = document.querySelector('#cancelEditBtn');
        function editTodos() {
          console.log('Submit Edit!');
          const input = getInputForm();
          editTodo(currentTodoId, input);

          inputForm.innerHTML = renderInputForm();
          pageScroll(currentTodo);
        }
        editTodoBtn.addEventListener('click', editTodos);
        cancelEditBtn.addEventListener('click', () => {
          editTodoBtn.removeEventListener('click', editTodos);
          inputForm.innerHTML = renderInputForm();
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
      console.log(currentTodo);
      if (confirmDelete) {
        deleteTodo(currentTodoId);
      }
    });
  });
};
