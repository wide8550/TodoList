export default function () {
  const todoContacts = document.querySelectorAll('.contacts .contact');
  let contactResult = {};
  todoContacts.forEach((contact) => {
    const phoneNumber = contact.children[0].children[0].value;
    const type = contact.children[0].children[1].value;
    console.log(contact);
    contactResult[type] = phoneNumber;
  });
  return contactResult;
}
