const todoTitle = document.getElementById('todo-title');
const todoDeadline = document.getElementById('todo-deadline');
const timePicker = document.getElementById('time-picker');
const todoContent = document.getElementById('todo-content');

export const getInputForm = () => {
  const title = todoTitle.value;
  const deadline = todoDeadline.value + ' ' + timePicker.value;
  const content = todoContent.value;
  const todoContacts = document.querySelectorAll('.contacts .contact');

  let contacts = {};
  todoContacts.forEach((contact) => {
    const phoneNumber = contact.children[0].children[0].value;
    const type = contact.children[0].children[1].value;
    // console.log(contact);
    contacts[type] = phoneNumber;
  });

  // console.log({
  //   title,
  //   deadline,
  //   contacts,
  //   content
  // });
  return {
    title,
    deadline,
    contacts,
    content
  };
};
