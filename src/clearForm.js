import { renderContactsForm } from './renderContactsForm';
import { addContactFormBtnListener } from './addContactFormBtnListener';
import { addFormBlurEventListener } from './addFormBlurEventListener';

export function clearForm() {
  const todoContacts = document.querySelectorAll('.contacts .contact');
  // title 值 = ''
  document.getElementById('todo-title').value = '';
  // 移除 title 的 style class border border-success border-danger
  document
    .getElementById('todo-title')
    .classList.remove('border', 'border-success', 'border-danger');
  // deadline date
  document.getElementById('todo-deadline').value = '';
  document
    .getElementById('todo-deadline')
    .classList.remove('border', 'border-success', 'border-danger');
  // time
  document.getElementById('time-picker').value = '';
  document
    .getElementById('time-picker')
    .classList.remove('border', 'border-success', 'border-danger');
  // content
  document.getElementById('todo-content').value = '';

  // 移除所有 contacts
  todoContacts.forEach((todoContact) => {
    todoContact.remove();
  });

  // Add new contact form after cleanup
  // renderContactsForm(contactFormBtn, {});
  // addContactFormBtnListener();
  // addFormBlurEventListener();
  // console.log(todoContacts);
}
