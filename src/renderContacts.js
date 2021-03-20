function renderContact(contactName, contactContent) {
  return `<div class="contact-item">${contactName} : ${contactContent}</div>`;
}

// render data contacts
export const renderContacts = (contacts) => {
  if (!contacts) {
    console.log('No Contacts');
    return;
  }
  let output = '';
  for (let key in contacts) {
    output += renderContact(key, contacts[key]);
  }

  if (!output) {
    return '';
  } else {
    return `
    <div class="contact-items">
      ${output}
    </div>
    <hr />`;
  }
};
