(function ($, Drupal) {
  Drupal.behaviors.parallaxEffect = {
    attach: function (context, settings) {
      $(window, context).on('scroll', function () {
        var scrollY = $(window).scrollTop();
        // Move the moon.
        $('.moon').css({
          left: -scrollY * 0.3 + 'px',
          top: -scrollY * 0.3 + 'px'
        });
        // Move the mountain.
        $('.mountain').css({
          top: -scrollY * 0.3 + 'px'
        })
        // Move the text.
        $('.parallax-text').css({
          top: scrollY + 'px'
        })
      })
    }
  }
})(jQuery, Drupal);
