const btn = document.querySelector('.container-types__btn');
const brandsContainer = document.querySelector('.container-types__desktop');
const btnShowMore = btn.querySelector('.container-types__text-btn');

const toggleShowMore = function () {
  brandsContainer.classList.toggle('container-types__desktop--show-more');
  btnShowMore.classList.toggle('container-types__text-btn--hide');

  if (brandsContainer.classList.contains('container-types__desktop--show-more')) {
    btnShowMore.textContent = 'Скрыть';
  } else {
    btnShowMore.textContent = 'Показать всё';
  }
}

btn.addEventListener('click', toggleShowMore);
