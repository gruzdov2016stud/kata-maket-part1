document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.container-pages__navbar-open');
  const menuClose = document.querySelector('.navbar__close');
  const overlay = document.querySelector('.overlay');

  const menu = document.querySelector('.navbar');
  const modalCall = document.querySelector('.modal-call');
  const modalFeedback = document.querySelector('.modal-feedback');
  const containerPages = document.querySelector('.container-pages');

  const openMenu = () => {
    menu.classList.add('navbar__btn--active');
    overlay.classList.add('overlay--active');

    menu.setAttribute('tabindex',0);
    modalCall.setAttribute('tabindex',-1);
    modalFeedback.setAttribute('tabindex',-1);
    containerPages.setAttribute('tabindex',-1);

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
    containerPages.setAttribute('tabindex',1);
  };

  menuOpen.addEventListener('click', openMenu);

  menuClose.addEventListener('click', closeMenu);

  overlay.addEventListener('click', closeMenu);
});
