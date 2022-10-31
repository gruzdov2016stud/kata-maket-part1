import Swiper, {
  Pagination, Navigation
} from 'swiper';
Swiper.use([Navigation, Pagination]);

if (innerWidth < 768) {
  const swiper1 = new Swiper('.swiper1', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },

    init: true
  });


  const swiper2 = new Swiper('.swiper2', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },

    init: true
  });

  const swiper3 = new Swiper('.swiper3', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
    },

    init: true
  });
}

