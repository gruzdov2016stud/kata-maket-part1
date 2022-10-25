const brandsButton = document.querySelector('.container-brands__btn');
const brandsContainer = document.querySelector('.container-brands__desktop');
const brandsShowMoreTxt = brandsButton.querySelector('.container-brands__text-btn');

const toggleShowMore = function () {
    brandsContainer.classList.toggle('container-brands__desktop--show-more');
    brandsShowMoreTxt.classList.toggle('container-brands__text-btn--hide');
    if (brandsContainer.classList.contains('container-brands__desktop--show-more')) {
        brandsShowMoreTxt.textContent = 'Скрыть';
    } else {
        brandsShowMoreTxt.textContent = 'Показать всё';
    }
}

brandsButton.addEventListener('click', toggleShowMore);
