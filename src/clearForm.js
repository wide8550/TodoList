import { renderContactsForm } from './renderContactsForm';

const todoTitle = document.getElementById('todo-title');
const todoDeadline = document.getElementById('todo-deadline');
const timePicker = document.getElementById('time-picker');
const todoContent = document.getElementById('todo-content');

export function clearForm() {
  const contactFormBtn = document.querySelector('#contactFormBtn').parentNode;
  const todoContacts = document.querySelectorAll('.contacts .contact');

  todoTitle.value = '';
  todoDeadline.value = '';
  timePicker.value = '';
  todoContent.value = '';
  todoContacts.forEach((todoContact) => {
    todoContact.remove();
  });
  // Add new contact form after cleanup
  renderContactsForm(contactFormBtn, null);
  // console.log(todoContacts);
}
