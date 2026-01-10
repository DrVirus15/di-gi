/* carousel for section intro */
$(document).ready(function () {
  $(".intro__carousel").owlCarousel(
    {
      items: 1,
      loop: true,
      dots: true,
      nav: true,
      navText: [
      '<span class="material-symbols-sharp">chevron_left</span>',
      '<span class="material-symbols-sharp">chevron_right</span>'
    ],
    }
  );
});
/* carousel for quotes section */
$(document).ready(function () {
  $(".testimonial__carousel").owlCarousel(
    {
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000
    }
  );
});
