(function ($, Drupal) {
  Drupal.behaviors.otpLogin = {
    attach: function (context, settings) {
      const $email = $('input[name="name"]', context);
      const $otpBtn = $('#send-otp-btn', context);

      // Enable "Send OTP" button only if email looks valid
      $email.on('input', function () {
        if ($email.val().length > 5 && $email.val().includes('@')) {
          $otpBtn.removeAttr('disabled');
        } else {
          $otpBtn.attr('disabled', 'disabled');
        }
      });
    }
  };
})(jQuery, Drupal);
