$(function() {

	/* Slick slider
	=========================*/

	$("#slider").slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  rows: 1,
	  variableWidth: true,
	  arrows: false,
	  centerMode: true,
	  centerPadding: '60px',
	  speed: 700,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  dots: true

	});

	$('#scene').parallax({
	  calibrateX: false,
	  calibrateY: true,
	  invertX: false,
	  invertY: true,
	  limitX: false,
	  limitY: 10,
	  scalarX: 2,
	  scalarY: 2,
	  frictionX: 0.2,
	  frictionY: 0.8
	});

	/* Popup
	=========================*/


	$(".modal-show").on("click", function(e) {
	  e.preventDefault();

	  var currentModal = $(this).attr("href");

	  $(currentModal + ", #js-overlay").fadeIn(200);
	});

	$(".js-modal-close, #js-overlay").on("click", function(e) {
	  e.preventDefault();

	  $(".js-modal, #js-overlay").fadeOut();
	});

	/* Scrolling nav
	=========================*/

	$(".header__nav a").on("click", function(e) {
	 	e.preventDefault();

	 	var toBlock = $(this).attr("href");
	 	var scrolling = $(toBlock).offset().top;

	 	$("html, body").animate({
	 		scrollTop: scrolling - 30
	 	}, 600);
	});

	$(".scroll").on("click", function(e) {
	 	e.preventDefault();

	 	var toBlock = $(this).attr("href");
	 	var scrolling = $(toBlock).offset().top;

	 	$("html, body").animate({
	 		scrollTop: scrolling - 30
	 	}, 600);
	});
});