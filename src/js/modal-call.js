document.addEventListener('DOMContentLoaded', () => {
  const modalCallOpenBtns = document.querySelectorAll('.action-btn--call');
  const modalCall = document.querySelector('.modal-call');
  const modalCallCloseBtn = document.querySelector('.modal-form__close--call');
  const menu = document.querySelector('.modal-menu');
  const overlay = document.querySelector('.overlay');

  const openModalCall = function () {
    modalCall.classList.add('modal-call--active');
    overlay.classList.add('overlay--active');

    if (menu.classList.contains('modal-menu--active')) {
      menu.classList.remove('modal-menu--active');
    }

  };

  const closeModalCall = function () {
    modalCall.classList.remove('modal-call--active');
    overlay.classList.remove('overlay--active');
  };

  modalCallOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalCall, false);
  });

  modalCallCloseBtn.addEventListener('click', closeModalCall, false);

  overlay.addEventListener('click', closeModalCall, false);
});
