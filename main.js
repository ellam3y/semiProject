const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 3000, // 3 ثوانٍ بين كل شريحة
      disableOnInteraction: true, // عدم الإيقاف عند التفاعل
      pauseOnMouseEnter: true, // عدم الإيقاف عند تمرير الماوس
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });   


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
  
