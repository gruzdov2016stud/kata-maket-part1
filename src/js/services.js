document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll('.main-nav__list');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(element => {
        element.classList.remove('main-nav__item--active');
      });
      item.classList.add('services__item--active');
    });
  });
});
