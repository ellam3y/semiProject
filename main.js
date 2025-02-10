const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 3000, // 3 ثوانٍ بين كل شريحة
    disableOnInteraction: true, // عدم الإيقاف عند التفاعل
    pauseOnMouseEnter: true, // عدم الإيقاف عند تمرير الماوس
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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
      slidesPerView: 4, // عند 768px أو أقل، عرض شريحتين
    },
    320: {
      slidesPerView: 2, // عند 480px أو أقل، عرض شريحة واحدة
    },
  },
});

swiperEl.initialize();

// document.addEventListener("DOMContentLoaded", function () {
//   var mySlider = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },

//   });
// });

const swiperBtn = document.querySelector(".swiper-button-next svg");

// swiper.style.color = "red";
console.log(swiperBtn);
