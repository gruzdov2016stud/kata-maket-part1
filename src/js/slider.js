import Swiper, {
  Pagination, Navigation
} from 'swiper';
Swiper.use([Navigation, Pagination]);

const mediaQueryList = window.matchMedia("(min-width: 768px)");

if (!mediaQueryList.matches) {
  const swiperBrands = new Swiper('.swiper__brands', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination__brands',
      clickable: true,
    },

    init: true
  });


  const swiperTypes = new Swiper('.swiper__types', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination__types',
      clickable: true,
    },

    init: true
  });

  const swiperPrice = new Swiper('.swiper__price', {

    modules: [Pagination],

    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: '.swiper-pagination__price',
      clickable: true,
    },

    init: true
  });
}

