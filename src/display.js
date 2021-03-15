export const displayBeforeBegin = (output, target) => {
  target.insertAdjacentHTML('beforebegin', output);
};

export const displayAfterBegin = (output, target) => {
  target.insertAdjacentHTML('afterbegin', output);
};
export const displayAfterEnd = (output, target) => {
  target.insertAdjacentHTML('afterend', output);
};
