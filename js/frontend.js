$(".pixel-check").on("click", function () {
  $("body").toggleClass("pixel-check-active");
});

// menu dropdown
// $(".language-opener").on("click", function () {
//   $('.language-dropdown').toggleClass("show");
// });
$(".navbar-toggler").on("click", function () {
  $(".navbar-toggler").toggleClass("icon-change");
});
// $("html").click(function (e) {
//   if ($(e.target).closest('.language-dropdown').length == 0)
//       $(".language-dropdown").removeClass('show');
// });
// $("html").click(function (e) {
//   if ($(e.target).closest('.fractional-dropdown').length == 0)
//       $(".fractional-dropdown").removeClass('show');
// });

//

var mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 0,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 0,

  // Default slidesPerView for smaller screens
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allows users to click on the dots to navigate
  },
  // Responsive breakpoints
  breakpoints: {
    // When the viewport width is >= 480px
    768: {
      centeredSlides: true,
      roundLengths: true,
      slidesPerView: 1.8, // Adjust for small screens like mobile phones
      // Enable pagination (dots)
    
    },

    // When the viewport width is >= 1024px
    992: {
      slidesPerView: 2.5, // Adjust for desktop
    },
  
  },
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 0) {
    $("body").addClass("scrolled"); // Add class when scrolled
  } else {
    $("body").removeClass("scrolled"); // Remove class when at the top
  }
});
