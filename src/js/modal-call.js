document.addEventListener('DOMContentLoaded', () => {
  const modalCallOpenBtns = document.querySelectorAll('.action-btn--call');
  const modalCall = document.querySelector('.modal-call');
  const modalCallCloseBtn = document.querySelector('.modal-form__close--call');
  const menu = document.querySelector('.navbar');
  const overlay = document.querySelector('.overlay');

  const openModalCall = () => {
    modalCall.classList.add('modal-call--active');
    overlay.classList.add('overlay--active');

    if (menu.classList.contains('navbar__btn--active')) {
      menu.classList.remove('navbar__btn--active');
    }

  };

  const closeModalCall = () => {
    modalCall.classList.remove('modal-call--active');
    overlay.classList.remove('overlay--active');
  };

  modalCallOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalCall);
  });

  modalCallCloseBtn.addEventListener('click', closeModalCall);

  overlay.addEventListener('click', closeModalCall);
});
