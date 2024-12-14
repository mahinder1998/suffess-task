$(document).ready(function(){
    $('.banner-main').slick({
        dots: true,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn')
      });

      $('.testimonial-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        dots: false,
        prevArrow: $('.arrow-left-test'),
        nextArrow: $('.arrow-right-test'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      });
})