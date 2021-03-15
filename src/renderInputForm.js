import { renderContactsForm } from './renderContactsForm';
import moment from 'moment';
// import { renderContacts } from './renderContacts';
export const renderInputForm = (data) => {
  let output = '';

  if (!data) {
    output += `<div class="form-group">
      <div class="row row-cols-4">
        <div class="col-6">
          <!-- title -->
          <input
            type="text"
            id="todo-title"
            class="form-control mb-4"
            placeholder="Title ..."
            required
          />
        </div>
        <div class="col">
          <!-- date -->
          <input
            type="date"
            id="todo-deadline"
            class="form-control mb-4"
            placeholder="DeadLine ..."
            required
          />
        </div>
        <div class="col">
          <!-- time -->
          <input
            id="time-picker"
            placeholder="例如: 14:00"
            class="form-control mb-4"
          />
        </div>
      </div>
      <!-- contacts -->
      <div class="row row-cols-4 contacts d-flex align-items-baseline">
        <!-- contact -->
        <div class="col-8 contact">
          <div class="input-group mb-3">
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
  } else {
    output += `<div class="form-group">
        <div class="row row-cols-4">
          <div class="col-6">
            <input
              type="text"
              id="todo-title"
              class="form-control mb-4"
              value="${data.title}"
              required
            />
          </div>
          <div class="col">        
            <input
              type="date"
              id="todo-deadline"
              class="form-control mb-4"
              value="${
                data.deadline ? moment(data.deadline).format('YYYY-MM-DD') : ''
              }"
              required
            />
          </div>
          <div class="col">       
            <input
              id="time-picker"
              value="${
                data.deadline ? moment(data.deadline).format('hh:mm') : ''
              }"
              class="form-control mb-4"
            />
          </div>
        </div>
     
        <div class="row row-cols-4 contacts d-flex align-items-baseline">
         
          ${renderContactsForm(null, data.contacts)}
         
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

        <div class="d-grid">
          <button
            id="EditTodoBtn"
            class="btn btn-primary text-light mt-3"
            type="button"
          >
            送出編輯
          </button>
        </div>
      </div>`;
  }
  return output;
};
