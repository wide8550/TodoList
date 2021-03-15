export const removeDisplay = () => {
  const parent = document.getElementById('showTodo');
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
};
