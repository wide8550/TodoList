import { displayAfterBegin } from './display';
import { renderDatas } from './renderDatas';
import { removeDisplay } from './removeDisplay';
import { getTodo, editTodo, deleteTodo } from '../api/Todos';
import { renderInputForm } from './renderInputForm';

const displayResult = document.getElementById('showTodo');

export const displayTodos = (data) => {
  const output = renderDatas(data);

  removeDisplay();

  // console.log(displayResult.children);
  displayAfterBegin(output, displayResult);
  // finish btn
  const finishBtns = document.querySelectorAll('.finishBtn');
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
      // editTodo()
      console.log(currentTodo);
      console.log(currentTodoId);

      // moveToFinish(e.target.closest('.todo'));
    });
  });

  // edit Btn click event listener
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('edit');
      const inputForm = document.querySelector('#inputForm');

      const currentTodo = e.target.closest('.todo');
      const currentTodoId = currentTodo.getAttribute('id');
      getTodo(currentTodoId).then((data) => {
        inputForm.innerHTML = renderInputForm(data);
      });

      // editTodo(currentTodoId);
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
