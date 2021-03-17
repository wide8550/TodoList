import {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo
} from './api/Todos';

import { clock } from './src/clock';
import { clearForm } from './src/clearForm';

import { displayTodos } from './src/displayTodos';

import { addContactFormBtnListener } from './src/addContactFormBtnListener';

const submitBtn = document.getElementById('submitTodo');

// show clock
clock();
// display Todos
// getTodos().then((data) => {
//   displayResult.innerHTML = renderDatas(data);
// });
getTodos().then((data) => displayTodos(data));

// Event Listener

// add extra contact form
// contactFormBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   renderContactsForm(e.target.parentNode.parentNode, null);
// });
addContactFormBtnListener();

// submit event listener
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createTodo();
  clearForm();
});
