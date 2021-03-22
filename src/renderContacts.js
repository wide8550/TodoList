function renderContact(contactName, contactContent) {
  return `<div class="contact-item">${contactName} : ${contactContent}</div>`;
}

// render data contacts
export const renderContacts = (contacts) => {
  // console.log(contacts);
  if (JSON.stringify(contacts) === '{}') {
    // console.log('No Contacts');
    return '';
  }
  let output = '';
  for (let key in contacts) {
    output += renderContact(key, contacts[key]);
  }

  return `<div class="contact-items">
            ${output}
          </div>`;
};
