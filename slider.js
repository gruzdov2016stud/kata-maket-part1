import Swiper, {
    Pagination
} from 'swiper';

if (innerWidth < 768){
    const swiper = new Swiper('.swiper', {
        modules: [Pagination],

        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        width: 240,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        init: true
    });
}

