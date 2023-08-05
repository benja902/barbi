// var swiper = new Swiper('.mySwiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 15,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShaows: true,
//     },
//     loop: true,
//   });

  var swiper = new Swiper('.mySwiper', {
    autoplay: {
      delay: 2000
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });