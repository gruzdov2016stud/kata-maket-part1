document.addEventListener('DOMContentLoaded', () => {
  const modalCallOpenBtns = document.querySelectorAll('.action-btn--call');
  const modalCallCloseBtn = document.querySelector('.modal-form__close--call');
  const overlay = document.querySelector('.overlay');

  const menu = document.querySelector('.navbar');
  const modalCall = document.querySelector('.modal-call');
  const modalFeedback = document.querySelector('.modal-feedback');
  const containerPages = document.querySelector('.container-pages');

  const openModalCall = () => {
    modalCall.classList.add('modal-call--active');
    overlay.classList.add('overlay--active');
    menu.setAttribute('tabindex',-1);
    modalCall.setAttribute('tabindex',1);
    modalFeedback.setAttribute('tabindex',-1);
    containerPages.setAttribute('tabindex',-1);

    if (menu.classList.contains('navbar__btn--active')) {
      menu.classList.remove('navbar__btn--active');
    }

  };

  const closeModalCall = () => {
    modalCall.classList.remove('modal-call--active');
    overlay.classList.remove('overlay--active');
    containerPages.setAttribute('tabindex',1);
  };

  modalCallOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalCall);
  });

  modalCallCloseBtn.addEventListener('click', closeModalCall);

  overlay.addEventListener('click', closeModalCall);
});
