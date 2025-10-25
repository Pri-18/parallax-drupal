(function (Drupal, once) {
  Drupal.behaviors.bannerSlider = {
    attach: function (context, settings) {
      once('bannerSlider', '.banner-slider', context).forEach(function (el) {
        window.jQuery(el).slick({
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: true,
          fade: false,
          rtl: false
        });
      });
    }
  };
})(Drupal, window.once);
