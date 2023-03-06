const swiper = new Swiper(".swiperFast", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        770: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 4,
            spaceBeetween: 10 
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
