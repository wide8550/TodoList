import moment from 'moment';
const time = document.getElementById('time');
export const clock = () =>
  setInterval(() => {
    let timeChild = time.childNodes[0];
    // console.log(timeChild);
    if (time.hasChildNodes()) {
      time.removeChild(timeChild);
    }

    let now = moment().format('YYYY-MM-DD hh:mm:ss A');
    let span = document.createElement('span');
    let textNode = document.createTextNode(now);
    span.appendChild(textNode);
    time.appendChild(span);
  }, 1000);
