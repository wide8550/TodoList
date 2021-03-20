export const getInputForm = () => {
  const title = document.getElementById('todo-title').value.trim();
  const deadlineDate = document.getElementById('todo-deadline').value.trim();
  const deadlineTime = document.getElementById('time-picker').value.trim();
  const content = document.getElementById('todo-content').value.trim();
  const todoContacts = document.querySelectorAll('.contacts .contact');

  let contacts = {};
  todoContacts.forEach((contact) => {
    const phoneNumber = contact.children[0].children[0].value;
    const type = contact.children[0].children[1].value;
    // console.log(contact);
    if (!phoneNumber) return;
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
    deadline: {
      deadlineDate,
      deadlineTime
    },
    contacts,
    content
  };
};
