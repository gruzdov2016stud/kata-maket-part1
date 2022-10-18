document.addEventListener("DOMContentLoaded", () => {
    const brandsShowMore = document.querySelector('.show-more__btn');
    const brandsContainer = document.querySelector('.main-container');
    const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text');

    const toggleBrandsShowMore = () => {
        brandsContainer.classList.toggle('main-container--show-more');
        brandsShowMoreTxt.classList.toggle('show-more__text--hide');

        if (brandsContainer.classList.contains('main-container--show-more')) {
            brandsShowMoreTxt.textContent = 'Скрыть';
        } else {
            brandsShowMoreTxt.textContent = 'Показать все';
        }
    }

    brandsShowMore.addEventListener('click', toggleBrandsShowMore);
});
