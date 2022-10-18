document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('.read-more')
    let menuOpen = document.querySelector('.main-menu')
    let menuClose = document.querySelector('.hide')
    button.addEventListener('click', function () {
        menuOpen.classList.add('main-menu--open')
        button.classList.add('read-more--hide')
        menuClose.classList.remove('hide--remove')
    });

    menuClose.addEventListener('click', function () {
        menuClose.classList.add('hide--remove')
        menuOpen.classList.remove('main-menu--open')
        button.classList.remove('read-more--hide')
    });;
});
