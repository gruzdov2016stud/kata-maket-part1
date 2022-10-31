document.addEventListener('DOMContentLoaded', () => {
  const modalFeedbackOpenBtns = document.querySelectorAll('.action-btn--chat');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalFeedbackCloseBtn = document.querySelector('.modal-form__close--feedback');
  const menu = document.querySelector('.modal-menu');
  const overlay = document.querySelector('.overlay');


  const openModalFeedback = function () {
    modalFeedback.classList.add('modal-feedback--active');
    overlay.classList.add('overlay--active');

    if (menu.classList.contains('modal-menu--active')) {
      menu.classList.remove('modal-menu--active');

    }

  };

  const closeModalFeedback = function () {
    modalFeedback.classList.remove('modal-feedback--active');
    overlay.classList.remove('overlay--active');
  };

  modalFeedbackOpenBtns.forEach(btn => {
    btn.addEventListener('click', openModalFeedback, false);
  });

  modalFeedbackCloseBtn.addEventListener('click', closeModalFeedback, false);
  overlay.addEventListener('click', closeModalFeedback, false);
});
