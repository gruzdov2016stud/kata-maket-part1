document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll('.navbar-nav__item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(element => {
        element.classList.remove('navbar-nav__item--active');
      });
      item.classList.add('navbar-nav__item--active');
    });
  });

});
