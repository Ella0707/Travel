// мобильное меню
$('.header__burger-btn').on('click', function (e) {
  e.preventDefault();
  document.body.classList.toggle('lock');
  $('.header__burger-btn').toggleClass("active");
  $('.header__nav').toggleClass("active");
});


// слайдер

const activitySlider = new Swiper('#destroy-1', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.slider-arrow-next',
    prevEl: '.slider-arrow-prev',
},
});

if ($('#destroy-1').length) {
  if ($(window).width() >= 769) {
      activitySlider.destroy();
  }
}