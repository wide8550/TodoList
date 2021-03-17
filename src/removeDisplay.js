export const removeDisplay = (parent) => {
  // const parent = document.getElementById('showTodo');
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};
