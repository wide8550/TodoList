import { renderContactsForm } from './renderContactsForm';
export const addContactFormBtnListener = () => {
  const contactFormBtn = document.querySelector('#contactFormBtn i');
  contactFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target);
    renderContactsForm(e.target.parentNode.parentNode, null);
  });
};
