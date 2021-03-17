export const getInputForm = () => {
  const title = document.getElementById('todo-title').value;
  const deadline =
    document.getElementById('todo-deadline').value +
    ' ' +
    document.getElementById('time-picker').value;
  const content = document.getElementById('todo-content').value;
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
