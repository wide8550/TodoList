function renderContactForm(contactName, contactContent) {
  return `<div class="col-9 contact">
  <div class="input-group mb-4 position-relative">
    <input
      type="text"
      class="form-control phoneNumber"
      value="${contactContent}"
      aria-label="Text input with dropdown button"
      name="phoneNumber"
    />
    <select
      class="form-select rounded-end"
      aria-label="Default select example"
    >
      <option value="phone" ${
        contactName === 'phone' ? 'selected' : null
      }>Phone</option>
      <option value="home" ${
        contactName === 'home' ? 'selected' : null
      }>Home</option>
      <option value="office" ${
        contactName === 'office' ? 'selected' : null
      }>Office</option>
      <option value="fax" ${
        contactName === 'fax' ? 'selected' : null
      }>Fax</option>
      <option value="others" ${
        contactName === 'other' ? 'selected' : null
      }>Others</option>
    </select> 
    <small
      class="invisible position-absolute text-danger fw-bold"
    ></small>
  </div>
</div>`;
}

export function renderContactsForm(contacts) {
  // console.log(contacts);
  if (JSON.stringify(contacts) == '{}') {
    let output = '';
    output += renderContactForm(null, '');
    // console.log(output);
    return output;
  } else {
    let output = '';
    for (let key in contacts) {
      // console.log(key, contacts[key]);
      output += renderContactForm(key, contacts[key]);
    }
    return output;
  }
}
