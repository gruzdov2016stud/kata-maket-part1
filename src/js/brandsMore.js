const btn = document.querySelector('.container-brands__btn');
const brandsContainer = document.querySelector('.container-brands__desktop');
const btnShowMore = btn.querySelector('.container-brands__text-btn');

const toggleShowMore = function () {
  brandsContainer.classList.toggle('container-brands__desktop--show-more');
  btnShowMore.classList.toggle('container-brands__text-btn--hide');

  if (brandsContainer.classList.contains('container-brands__desktop--show-more')) {
    btnShowMore.textContent = 'Скрыть';
  } else {
    btnShowMore.textContent = 'Показать всё';
  }
}

btn.addEventListener('click', toggleShowMore);
