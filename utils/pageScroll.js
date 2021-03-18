export const pageScroll = (target) => {
  // console.log(window.pageYOffset);
  // console.log(target.getBoundingClientRect().top);
  window.scroll({
    top: window.pageYOffset + target.getBoundingClientRect().top - 50,
    left: 0,
    behavior: 'smooth'
  });
};
