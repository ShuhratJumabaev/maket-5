$(".banner").slick({
   dots: true,
   arrows: false,
   slidesToShow: 1,
   slidesToScroll: 1,
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
