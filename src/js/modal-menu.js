document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menu = document.querySelector('.navbar__btn-close');
  const menuClose = document.querySelector('.navbar__burger-befor');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCall = document.querySelector('.modal-call');
  const overlay = document.querySelector('.overlay');


  const openMenu = function () {
    menu.classList.toggle('navbar__btn-active');
    overlay.classList.add('overlay--active');

    if (modalFeedback.classList.contains('modal-feedback--active')) {
      modalFeedback.classList.remove('modal-feedback--active');
    }

    if (modalCall.classList.contains('modal-call--active')) {
      modalCall.classList.remove('modal-call--active');
    }
  };

  const closeMenu = function () {
    menu.classList.toggle('navbar__btn-active');
    overlay.classList.remove('overlay--active');
  };

  menuOpen.addEventListener('click', openMenu, false);

  menuClose.addEventListener('click', closeMenu, false);

  overlay.addEventListener('click', closeMenu, false);
});
