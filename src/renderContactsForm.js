import { addFormBlurEventListener } from './addFormBlurEventListener';
import { displayBeforeBegin } from './display';
function renderContactForm(contactName, contactContent) {
  return `<div class="col-9 contact">
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      value="${contactContent}"
      aria-label="Text input with dropdown button"
    />
    <select
      class="form-select"
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

export function renderContactsForm(target, contacts) {
  // console.log(contacts);
  if (JSON.stringify(contacts) == '{}') {
    let output = '';
    output += renderContactForm(null, '');
    displayBeforeBegin(output, target);
    addFormBlurEventListener();
    return output;
    // target.insertAdjacentHTML('beforebegin', output);
  } else {
    let output = '';
    for (let key in contacts) {
      // console.log(key, contacts[key]);
      output += renderContactForm(key, contacts[key]);
    }
    addFormBlurEventListener();
    // console.log(output);
    // displayBeforeBegin(output, target);
    return output;
    // target.insertAdjacentHTML('beforebegin', output);
  }
}
