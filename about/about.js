const swiperEl = document.querySelector("swiper-container");

  Object.assign(swiperEl, {
    slidesPerView: 4, // العرض الافتراضي 4 شرائح
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2, // عند 768px أو أقل، عرض شريحتين
      },
      320: {
        slidesPerView: 1, // عند 480px أو أقل، عرض شريحة واحدة
      }
    }
  });

  swiperEl.initialize();


  // document.addEventListener("DOMContentLoaded", function () {
  //   const swiperEl = document.querySelector(".sec7-divs");

  //   Object.assign(swiperEl, {
  //       slidesPerView: 4,
  //       autoplay: {
  //           delay: 2500,
  //           disableOnInteraction: false,
  //       },
  //       loop: true,
  //       breakpoints: {
  //           992: { slidesPerView: 4 },
  //           767: { slidesPerView: 2 },
  //           319: { slidesPerView: 1 }
  //       }
  //   });

//     swiperEl.initialize();
// });