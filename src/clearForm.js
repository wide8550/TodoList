import { renderContactsForm } from './renderContactsForm';

export function clearForm() {
  const contactFormBtn = document.querySelector('#contactFormBtn').parentNode;
  const todoContacts = document.querySelectorAll('.contacts .contact');

  document.getElementById('todo-title').value = '';
  document
    .getElementById('todo-title')
    .classList.remove('border', 'border-success', 'border-danger');

  document.getElementById('todo-deadline').value = '';
  document
    .getElementById('todo-deadline')
    .classList.remove('border', 'border-success', 'border-danger');
  document.getElementById('time-picker').value = '';
  document
    .getElementById('time-picker')
    .classList.remove('border', 'border-success', 'border-danger');

  document.getElementById('todo-content').value = '';
  todoContacts.forEach((todoContact) => {
    todoContact.remove();
  });
  // Add new contact form after cleanup
  renderContactsForm(contactFormBtn, null);
  // console.log(todoContacts);
}
