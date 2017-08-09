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


	/* start Portfolio popup */
	var portfolioCases = {
		ford: [
			'img/portfolio/mustang-case-1.jpg',
			'img/portfolio/mustang-case-2.jpg',
			'img/portfolio/mustang-case-3.jpg',
			'img/portfolio/mustang-case-4.jpg'
		],
			artobject: [
			'img/portfolio/artobject-case-1.jpg',
			'img/portfolio/artobject-case-2.jpg',
			'img/portfolio/artobject-case-3.jpg',
			'img/portfolio/artobject-case-4.jpg'
		],
			pophouse: [
			'img/portfolio/pophouse-case-1.jpg',
			'img/portfolio/pophouse-case-2.jpg',
			'img/portfolio/pophouse-case-3.jpg',
			'img/portfolio/pophouse-case-4.jpg',
			'img/portfolio/pophouse-case-5.jpg',
			'img/portfolio/pophouse-case-6.jpg'
		]
	}


	var $popupBg = $('.overlay'),
		$popupClose = $('#popup-close');
	$('.jsOpenPopupProject').on('click', function (e) {
		e.preventDefault();
		var $this = $(this),
			project = $this.attr('data-project');
		$popupBg.fadeIn(700);
		$popupClose.fadeIn(700);


		if ( $('.popup-project[data-project="'+ project +'"]').is(':empty') ) {
			function showAll() {
				for (var i = 1; i < portfolioCases[project].length; i++) {
					var imageSrc = portfolioCases[project][i];
					$('.popup-project[data-project="'+ project +'"]').append('<img src="'+ imageSrc +'">').show(function () {
						$(this).css('opacity', 1);
					});
				}
			}
			function showFirst() {
				var imageSrc = portfolioCases[project][0];
				var img = new Image();
				img.onload = function() {
					$('.popup-project[data-project="'+ project +'"]').html('<img src="'+ imageSrc +'">');
					showAll();
				};
				img.src = imageSrc;
			}
			showFirst();
		} else {
			$('.popup-project[data-project="'+ project +'"]').show(function () {
				$(this).css('opacity', 1);
			});
		}
	});

	$('#popup-close, .overlay').on('click', function (e) {
		e.preventDefault();
		var $popupProject = $('.popup-project:visible');
		setTimeout(function () {
			$popupBg.fadeOut(900);
			$popupClose.fadeOut(900);
		}, 500);
		if ($popupProject.length > 0) {
			$popupProject.css('opacity', 0);
			setTimeout(function () {
				$('.popup-project').fadeOut(function () {
					$('.popup-project').html('');
				})
			}, 1000);
		}
	});

	/* end Portfolio popup */
});