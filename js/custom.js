/* services */

$(document).ready(function () {
  //animate css on scroll
  new WOW().init();
});

/* work */
$(function () {
  $("#work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true,
    },
  });
});

/* team */

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 576 up
      576: {
        items: 2,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      },
    },
  });
});

/* testimonial */

$(document).ready(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/* stats */

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

/* Navigation */

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //hide nav bar
      $("nav").removeClass("jimmy-navbar");
      $("#backToTop").fadeOut();
    } else {
      //show nav bar
      $("nav").addClass("jimmy-navbar");
      $("#backToTop").fadeIn();
    }
  });
});

/* smooth scroll */

$(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();

    //get nav id
    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1000,
      "easeInOutExpo"
    );
  });
});

//close menu on click

$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
