import { removeDisplay } from './removeDisplay';
import { getTodos } from '../api/Todos';
import { displayTodos } from './displayTodos';

export const refreshTodosDisplay = () => {
  const showTodoParent = document.getElementById('showTodo');
  const showFinishedParent = document.getElementById('completeTodo');
  removeDisplay(parent);
  removeDisplay(showFinishedParent);
  getTodos().then((data) => {
    displayTodos(data);
  });
};
