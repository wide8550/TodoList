import { renderContactsForm } from './renderContactsForm';
import { addFormBlurEventListener } from './addFormBlurEventListener';
import { displayBeforeBegin } from './display';

export const addContactFormBtnListener = () => {
  const contactFormBtn = document.querySelector('#contactFormBtn i');
  if (contactFormBtn.getAttribute('contactBtnListener') !== 'true') {
    contactFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      target.setAttribute('contactBtnListener', 'true');
      // renderContactsForm({})新增 contact 空白表格
      const output = renderContactsForm({});
      // displayBeforeBegin 插入 contact 表格
      displayBeforeBegin(output, e.target.parentNode.parentNode);
      addFormBlurEventListener();
    });
  }
};
