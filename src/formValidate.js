import validator from 'validator';

export const validate = () => {
  const title = document.getElementById('todo-title');
  const deadlineDate = document.getElementById('todo-deadline');
  const deadlineTime = document.getElementById('time-picker');
  const contacts = document.querySelectorAll('.contacts .contact');
  // const input = getInputForm();
  // console.log(input);
  // console.log(input.contacts);
  const result = {};
  let cntContacts = 0;

  const titleValue = title.value.trim();
  const deadlineDateValue = deadlineDate.value.trim();
  const deadlineTimeValue = deadlineTime.value.trim();

  if (validator.isEmpty(titleValue)) {
    setErrorFor(title, 'Title cannot be blank');
  } else {
    setSuccessFor(title);
    result.title = true;
  }

  if (validator.isEmpty(deadlineDateValue)) {
    setErrorFor(deadlineDate, 'Date of deadline cannot be blank');
  } else {
    setSuccessFor(deadlineDate);
    result.deadlineDate = true;
  }

  if (validator.isEmpty(deadlineTimeValue)) {
    // remove border success
    if (deadlineTime.classList.contains('border-success')) {
      deadlineTime.classList.remove('border', 'border-success');
    }
    // remove border danger
    if (deadlineTime.classList.contains('border-danger')) {
      deadlineTime.classList.remove('border', 'border-danger');
    }
    // remove class invisible in tag 'small'
    const small = deadlineTime.parentElement.querySelector('small');
    small.classList.remove('invisible');
    // set result to true pretend it ready
    result.deadlineTime = true;
  } else if (
    !validator.matches(deadlineTimeValue, /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/g)
  ) {
    setErrorFor(deadlineTime, 'It is wrong format');
  } else {
    setSuccessFor(deadlineTime);
    result.deadlineTime = true;
  }
  if (contacts.length > 0) {
    contacts.forEach((contact) => {
      const input = contact.querySelector('input');
      const contactValue = input.value.trim();
      // console.log(input.classList.contains('phoneNumber'));
      if (validator.isEmpty(contactValue)) {
        // console.log(contactValue);
        if (input.classList.contains('border-success')) {
          input.classList.remove('border', 'border-success');
        }
        if (input.classList.contains('border-danger')) {
          input.classList.remove('border', 'border-danger');
        }
        const small = contact.querySelector('small');

        small.classList.add('invisible');
        // console.log(contact);
        result.contracts = true;
      } else if (!validator.matches(contactValue, /^(\d+([ -]?|\d)*\d+)$/g)) {
        setErrorFor(input, 'It is wrong format');
      } else {
        setSuccessFor(input);
        // count every single contact make sure every contact have been set to Success
        cntContacts++;
      }
    });
    if (cntContacts === contacts.length) {
      result.contracts = true;
    }
  }
  // console.log(result);
  return result;
};

function setErrorFor(input, message) {
  if (input.classList.contains('border-success')) {
    input.classList.remove('border', 'border-success');
  }
  input.classList.add('border', 'border-danger');
  const col = input.parentElement;
  const small = col.querySelector('small');
  small.classList.remove('invisible');
  small.innerText = message;
  if (input.classList.contains('phoneNumber')) {
    small.classList.add('top-100');
  }
}

function setSuccessFor(input) {
  if (input.classList.contains('border-danger')) {
    input.classList.remove('border', 'border-danger');
  }
  input.classList.add('border', 'border-success');
  const col = input.parentElement;
  const small = col.querySelector('small');
  small.classList.add('invisible');
}
