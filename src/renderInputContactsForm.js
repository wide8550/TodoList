import { renderContactsForm } from './renderContactsForm';
import { addContactFormBtnListener } from './addContactFormBtnListener';
export const renderInputContactsForm = (contacts) => {
  // const contactFormBtnParent = document.querySelector('#contactFormBtn')
  //   .parentElement;
  const output = renderContactsForm(contacts);
  addContactFormBtnListener();
  return output;
};
