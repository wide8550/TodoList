import { renderContacts } from './renderContacts';
export const renderDatas = (datas) => {
  let output = '';
  // console.log(datas);
  datas.forEach((data) => {
    output += `<div class="todo card bg-light mb-5" id="${data.id}">
    <div class="card-body">
      <div class="card-title">
        <div class="btn-toolbar justify-content-between" role="toolbar">
          <div class="date d-flex align-items-center">${data.deadline}</div>

          <div class="btn-group" role="group">
            <button class="finishBtn btn btn-info" type="button">
              <i class="far fa-check-circle fs-4"></i>
            </button>
            <button class="editBtn btn btn-secondary" type="button">
              <i class="fas fa-edit fs-5"></i>
            </button>
            <button class="deleteBtn btn btn-danger" type="button">
              <i class="fas fa-trash-alt fs-g-5"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="accordion" id="accordion-${data.id}">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-${data.id}">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-${data.id}"
              aria-expanded="false"
              aria-controls="collapse-${data.id}"
            >
              ${data.title}
            </button>
          </h2>
          <div
            id="collapse-${data.id}"
            class="accordion-collapse collapse"
            aria-labelledby="heading-${data.id}"
            data-bs-parent="#accordion-${data.id}"
          >
            <div class="accordion-body">
              ${data.contacts ? renderContacts(data.contacts) : ''}
              <p>${data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  return output;
};
