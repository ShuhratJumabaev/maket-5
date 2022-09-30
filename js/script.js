$(".banner").slick({
   dots: true,
   arrows: false,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 4000,
         settings: {
            arrows: true,
         },
      },
      {
         breakpoint: 1170,
         settings: {
            arrows: false,
         },
      },
   ],
});
$(".sliders").slick({
   dots: true,
   arrows: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   variableWidth: true,
   autoplay: true,
   autoplaySpeed: 3000,
   nextArrow:
      '<button class="slick-next"><img src="./img/right-arrow.png" alt=""></button>',
   prevArrow:
      '<button class="slick-prev"><img src="./img/left-arrow.png" alt=""></button>',
   responsive: [
      {
         breakpoint: 750,
         settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
         },
      },
      {
         breakpoint: 1170,
         settings: {
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
   ],
});

