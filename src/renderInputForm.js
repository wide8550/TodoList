import { renderContactsForm } from './renderContactsForm';
import moment from 'moment';
import { renderContacts } from './renderContacts';
// import { renderContacts } from './renderContacts';
export const renderInputForm = (data) => {
  let output = '';

  const contactFormBtn = document.querySelector('#contactFormBtn');
  if (!data) {
    output += `<div class="form-group">
          <div class="row row-cols-4">
            <div class="col-6 mb-4 position-relative">
              <!-- title -->
              <input
                type="text"
                id="todo-title"
                class="form-control"
                placeholder="Title ..."
                required
              />
              <small
                class="invisible position-absolute text-danger fw-bold"
              ></small>
            </div>
            <div class="col mb-4 position-relative">
              <!-- date -->
              <input
                type="date"
                id="todo-deadline"
                class="form-control"
                placeholder="DeadLine ..."
                required
              />
              <small
                class="invisible position-absolute text-danger fw-bold"
              ></small>
            </div>
            <div class="col mb-4 position-relative">
              <!-- time -->
              <input
                id="time-picker"
                placeholder="例如: 14:00"
                class="form-control"
              />
              <small
                class="invisible position-absolute text-danger fw-bold"
              ></small>
            </div>
          </div>
          <!-- contacts -->
          <div class="row row-cols-4 contacts d-flex align-items-baseline">
            <!-- contact -->
            <div class="col-8 contact">
              <div class="input-group mb-3 position-relative">
                <!-- phone number -->
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
                <!-- phone number types -->
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
                <small
                  class="invisible position-absolute text-danger fw-bold"
                ></small>
              </div>
            </div>
            <!--create select input form -->
            <div class="col">
              <a id="contactFormBtn" class="d-flex text-decoration-none">
                <i class="fas fa-plus-circle fs-3"></i>
              </a>
            </div>
          </div>

          <textarea
            class="form-control"
            id="todo-content"
            rows="3"
            placeholder="Memo ..."
          ></textarea>

          <div class="d-grid">
            <button
              id="submitTodo"
              class="btn btn-primary text-light mt-3"
              type="button"
            >
              送出
            </button>
          </div>
        </div>`;
    return output;
  } else {
    console.log(data.deadline);
    output += `<div class="form-group">
        <div className="container"> 
          <h3>Edit...</h3>
        </div>    
        <div class="row row-cols-4">
          <div class="col-6 mb-4 position-relative">
            <input
              type="text"
              id="todo-title"
              class="form-control"
              value="${data.title}"
              required
            />
            <small
              class="invisible position-absolute text-danger fw-bold"
            ></small>
          </div>
          <div class="col mb-4 position-relative">        
            <input
              type="date"
              id="todo-deadline"
              class="form-control"
              value="${
                data.deadline !== ''
                  ? moment(data.deadline).format('YYYY-MM-DD')
                  : ''
              }"
              required
            />
            <small
              class="invisible position-absolute text-danger fw-bold"
            ></small>
          </div>
          <div class="col mb-4 position-relative">       
            <input
              id="time-picker"
              value="${
                data.deadline !== ''
                  ? moment(data.deadline).format('HH:mm')
                  : ''
              }"
              class="form-control"
            />
            <small
              class="invisible position-absolute text-danger fw-bold"
            ></small>
          </div>
        </div>
     
        <div class="row row-cols-4 contacts d-flex align-items-baseline">
         
          ${renderContactsForm(contactFormBtn, data.contacts)}
         
          <div class="col">
            <a id="contactFormBtn" class="d-flex text-decoration-none">
              <i class="fas fa-plus-circle fs-3"></i>
            </a>
          </div>
        </div>

        <textarea
          class="form-control"
          id="todo-content"
          rows="3"
        >${data.content}</textarea>
        <div class="row">
          <div class="col d-grid">
            <button
              id="editTodoBtn"
              class="btn btn-primary text-light mt-3"
              type="button"
            >
            送出編輯
            </button>
          </div>
          <div class="col d-grid">
            <button
              id="cancelEditBtn"
              class="btn btn-info text-light mt-3"
              type="button"
            >
              取消
            </button>
          </div>
        </div>
      </div>`;
  }
  return output;
};
