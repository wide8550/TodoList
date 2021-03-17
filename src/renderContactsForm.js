import { displayBeforeBegin } from './display';
function renderContactForm(contactName, contactContent) {
  return `<div class="col-8 contact">
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
  </div>
</div>`;
}

export function renderContactsForm(target, contacts) {
  if (!contacts) {
    let output = `<div class="col-8 contact">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        aria-label="Text input with dropdown button"
      />
      <select
        class="form-select"
        aria-label="Default select example"
      >
        <option value="phone" selected>Phone</option>
        <option value="home">Home</option>
        <option value="office">Office</option>
        <option value="fax">Fax</option>
        <option value="others">Others</option>
      </select> 
    </div>
  </div>`;

    // return output;
    displayBeforeBegin(output, target);
    // target.insertAdjacentHTML('beforebegin', output);
  } else {
    let output = '';
    for (let key in contacts) {
      output += renderContactForm(key, contacts[key]);
    }
    // console.log(output);
    // displayBeforeBegin(output, target);
    return output;
    // target.insertAdjacentHTML('beforebegin', output);
  }
}
