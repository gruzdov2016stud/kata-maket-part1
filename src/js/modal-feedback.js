document.addEventListener('DOMContentLoaded', () => {
  const modalFeedbackOpenBtns = document.querySelectorAll('.action-btn--chat');
  const modalFeedbackCloseBtn = document.querySelector('.modal-form__close--feedback');
  const overlay = document.querySelector('.overlay');

  const menu = document.querySelector('.navbar');
  const modalCall = document.querySelector('.modal-call');
  const modalFeedback = document.querySelector('.modal-feedback');
  const containerPages = document.querySelector('.container-pages');


  const openModalFeedback = () => {
    modalFeedback.classList.add('modal-feedback--active');
    overlay.classList.add('overlay--active');

    menu.setAttribute('tabindex',-1);
    modalCall.setAttribute('tabindex',-1);
    modalFeedback.setAttribute('tabindex',1);
    containerPages.setAttribute('tabindex',-1);

    if (menu.classList.contains('navbar__btn--active')) {
      menu.classList.remove('navbar__btn--active');
    }

  };

  const closeModalFeedback = () => {
    modalFeedback.classList.remove('modal-feedback--active');
    overlay.classList.remove('overlay--active');
    containerPages.setAttribute('tabindex',1);
  };

  modalFeedbackOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalFeedback);
  });

  modalFeedbackCloseBtn.addEventListener('click', closeModalFeedback);
  overlay.addEventListener('click', closeModalFeedback);
});
