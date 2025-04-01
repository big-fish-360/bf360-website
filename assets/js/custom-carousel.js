$(document).ready(function () {
  var owl = $(".project-section .owl-carousel");
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".blog-section .owl-carousel");
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 4500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".servicepage-section .owl-carousel");
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});
