document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.container-pages__navbar-open');
  const menu = document.querySelector('.navbar');
  const menuClose = document.querySelector('.navbar__close');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCall = document.querySelector('.modal-call');
  const overlay = document.querySelector('.overlay');


  const openMenu = () => {
    menu.classList.add('navbar__btn--active');
    overlay.classList.add('overlay--active');

    if (modalFeedback.classList.contains('modal-feedback--active')) {
      modalFeedback.classList.remove('modal-feedback--active');
    }

    if (modalCall.classList.contains('modal-call--active')) {
      modalCall.classList.remove('modal-call--active');
    }
  };

  const closeMenu = () => {
    menu.classList.remove('navbar__btn--active');
    overlay.classList.remove('overlay--active');
  };

  menuOpen.addEventListener('click', openMenu);

  menuClose.addEventListener('click', closeMenu);

  overlay.addEventListener('click', closeMenu);
});
