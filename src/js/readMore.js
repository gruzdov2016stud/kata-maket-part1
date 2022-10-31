const textMoreButton = document.querySelector('.main-container__btn');
const btnShowMoreTxt = textMoreButton.querySelector('.main-container__btn-read-more-text');

const moreContainer = document.querySelector('.main-container__descriptions');

const toggleShowMore = function () {
  moreContainer.classList.toggle('main-container__descriptions--hide');
  btnShowMoreTxt.classList.toggle('main-container__read-more-text-btn--hide');

  if (moreContainer.classList.contains('main-container__descriptions--hide')) {
    btnShowMoreTxt.textContent = 'Скрыть текст';
  } else {
    btnShowMoreTxt.textContent = 'Читать далее';

  }
}
textMoreButton.addEventListener('click', toggleShowMore);
