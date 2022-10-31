document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menu = document.querySelector('.modal-menu');
  const menuClose = menu.querySelector('.modal-menu__btn-close');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCall = document.querySelector('.modal-call');
  const overlay = document.querySelector('.overlay');


  const openMenu = function () {
    menu.classList.add('modal-menu--active');
    overlay.classList.add('overlay--active');

    if (modalFeedback.classList.contains('modal-feedback--active')) {
      modalFeedback.classList.remove('modal-feedback--active');
    }

    if (modalCall.classList.contains('modal-call--active')) {
      modalCall.classList.remove('modal-call--active');
    }
  };

  const closeMenu = function () {
    menu.classList.remove('modal-menu--active');
    overlay.classList.remove('overlay--active');
  };

  menuOpen.addEventListener('click', openMenu, false);

  menuClose.addEventListener('click', closeMenu, false);

  overlay.addEventListener('click', closeMenu, false);


  const modalNavItems = document.querySelectorAll('.modal-menu__nav-item');

  modalNavItems.forEach(item => {
    item.addEventListener('click', () => {
      modalNavItems.forEach(element => {
        element.classList.remove('modal-menu__nav-item--active');
      });
      item.classList.add('modal-menu__nav-item--active');
    });
  });
});
