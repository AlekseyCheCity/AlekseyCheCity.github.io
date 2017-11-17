$(document).ready(function() {
	// START Инициализация FullPage
		$('#fullpage').fullpage({
			anchors:['description-page', 'reviews-page', 'calc-page', 'aboutUs-page', 'social-page', 'SEO-page'],
			css3: true,
			responsiveHeight: 630,
			responsiveWidth: 768,
			controlArrows: false,
			scrollOverflow: true,
			scrollOverflowOptions: {
				click: false,	
	        	preventDefaultException: {tagName: /.*/}
	        },
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
				if (index == 1) {
	                $('.header-catalog')
	                    .removeClass('open');
	                $('.catalog-button')
	                    .removeClass('active');
	                $('body')
	                    .removeClass('first-enter');
	            };
			},
			afterLoad: function(index){
				if (index != 1) {
	                // $.fn.fullpage.moveTo('description-page', 0)
	            };
			},
			onLeave: function(index, nextIndex, direction){
	            if (index == 1) {
	                $('.header-catalog')
	                    .removeClass('open');
	                $('.catalog-button')
	                    .removeClass('active');
	                $('body')
	                    .removeClass('first-enter');
	            };
	            if (nextIndex == 2) {
	                $('body')
	                    .addClass('dark-theme');
	            };
	            if (index == 1) {
	                $('body')
	                    .removeClass('dark-theme');
	                $.fn.fullpage.moveTo('description-page', 0)
	            };
	            if (nextIndex == 4) {
	                $('body')
	                    .addClass('dark-theme');
	            };
	            if (index == 4) {
	                $('body')
	                    .removeClass('dark-theme');
	            };
	            if (nextIndex == 1) {
	                $('#bottom-navig')
	                    .removeClass('next-3')
	                    .addClass('next-2')
	                    .removeClass('next-4')
	                    .removeClass('next-5');
	            };
	            if (nextIndex == 2) {
	                $('#bottom-navig')
	                    .addClass('next-3')
	                    .removeClass('next-2')
	                    .removeClass('next-4')
	                    .removeClass('next-5');
	            };
	            if (nextIndex == 3) {
	                $('#bottom-navig')
	                    .addClass('next-4')
	                    .removeClass('next-2')
	                    .removeClass('next-3')
	                    .removeClass('next-5');
	            };
	            if (nextIndex == 4) {
	                $('#bottom-navig')
	                    .addClass('next-5')
	                    .removeClass('next-2')
	                    .removeClass('next-3')
	                    .removeClass('next-4');
	            }
	            if (nextIndex == 5) {
	                $('#bottom-navig')
	                    .removeClass('next-5')
	                    .removeClass('next-2')
	                    .removeClass('next-3')
	                    .removeClass('next-4');
	            }
	            if (nextIndex == 6) {
	                $('#bottom-navig')
	                    .removeClass('next-5')
	                    .removeClass('next-2')
	                    .removeClass('next-3')
	                    .removeClass('next-4');
	            }
	        }
		});
	// FINISH Инициализация FullPage

	// START Tabs
		$( "#tabs" ).tabs();
		$( "#tabs-xs" ).tabs();
	// FINISH Tabs

	// START Навигация отзывы
		$('#reviews').on('click', '.review-next-btn', function(){
		  	$.fn.fullpage.moveSlideRight();
		});
		$('#reviews').on('click', '.review-prev', function(){
		  	$.fn.fullpage.moveSlideLeft();
		});
	// FINISH Навигация отзывы

	// START Slider photos
		 $('.slider-photos-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-photos-nav'
		});
		$('.slider-photos-nav').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: '.slider-photos-for',
		  centerMode: true,
		  centerPadding: '0',
		  focusOnSelect: true,
		  responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
	// FINISH Slider photos

	// START Инициализация CustomScrollbar
		$(".custom-scrollbar").mCustomScrollbar();
	// FINISH Инициализация CustomScrollbar

	// START Ховер
		$('.for-hover-next-slide').hover(
		    function() {
		      $(".active + .fp-slide").addClass('hover-next');
		    }, function() {
		      $(".active + .fp-slide").removeClass('hover-next');
		    }
		);
	// FINISH Ховер

	// START Открыть/закрыть выбор города
		$(".another-city-button").click(function(e) {
		  e.preventDefault();
		  $(".another-city-modal").toggleClass('open');
		})
	// FINISH Открыть/закрыть выбор города

	// START Выпадающий список табов на мобилке
		$(".dropdown-container").click(function(e) {
		  e.preventDefault();
		  $(this).toggleClass('open');
		})
	// FINISH Выпадающий список табов на мобилке

	// START Выпадающий список табов на мобилке
		$("#tabs-xs ul").click(function(e) {
		  e.preventDefault();
		  $("#tabs-xs ul").toggleClass('open');
		})
	// FINISH Выпадающий список табов на мобилке

	// START Открыть/закрыть Каталог
		$(".catalog-button").click(function(e) {
		  e.preventDefault();
		  $(this).toggleClass('active');
		  $('body').removeClass('first-enter');
		  $(".header-catalog").toggleClass('open');
		});
		$('#header').hover(
		    function() {
		      $(".header-catalog").addClass('open');
		      $('.catalog-button').addClass('active');
		    }, function() {
		      $(".header-catalog").removeClass('open');
		      $('.catalog-button').removeClass('active');
		    }
		);
	// FINISH Открыть/закрыть Каталог

	// START Открыть/закрыть форму обратной связи
		$(".for-callback-toogle").click(function(e) {
		  e.preventDefault();
		  $(".callback-window").toggleClass('open');
		})
	// FINISH Открыть/закрыть форму обратной связи

	// START Открыть/закрыть форму обратной связи
		$(".gamburger-toogler").click(function(e) {
		  e.preventDefault();
		  $(this).toggleClass('open');
		  $(".gamburger-window").toggleClass('open');
		})
	// FINISH Открыть/закрыть форму обратной связи

	// START Ползунки 4й шаг калькулятора
		$( ".calc-slider" ).slider({
	      orientation: "horizontal",
	      range: "min",
	      max: 1000,
	      value: 144
	    });
	// FINISH Ползунки 4й шаг калькулятора
});

// START Прячем прелоадер после загрузки страницы
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
// FINISH Прячем прелоадер после загрузки страницы