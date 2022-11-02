document.addEventListener('DOMContentLoaded', () => {
  const modalFeedbackOpenBtns = document.querySelectorAll('.action-btn--chat');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalFeedbackCloseBtn = document.querySelector('.modal-form__close--feedback');
  const menu = document.querySelector('.navbar__btn-close');
  const overlay = document.querySelector('.overlay');


  const openModalFeedback = () => {
    modalFeedback.classList.add('modal-feedback--active');
    overlay.classList.add('overlay--active');

    if (menu.classList.contains('navbar__btn--active')) {
      menu.classList.remove('navbar__btn--active');
    }

  };

  const closeModalFeedback = () => {
    modalFeedback.classList.remove('modal-feedback--active');
    overlay.classList.remove('overlay--active');
  };

  modalFeedbackOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalFeedback);
  });

  modalFeedbackCloseBtn.addEventListener('click', closeModalFeedback);
  overlay.addEventListener('click', closeModalFeedback);
});
