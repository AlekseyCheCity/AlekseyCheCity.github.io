$(document).ready(function() {
	
});
// START Hide preloader after load page
  $(window).on('load', function () {
      var $preloader = $('#page-preloader'),
          $spinner   = $preloader.find('.spinner');
      $spinner.fadeOut();
      $preloader.delay(350).fadeOut('slow');
  });
// FINISH Hide preloader after load page