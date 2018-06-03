(function () {
	
	'use strict';
	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-advans-vis-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('menu__item--current');
			} else {
				$(this).addClass('menu__item--current');
			}



		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-advans-vis-nav-toggle').removeClass('menu__item--current');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('menu__item--current');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('menu__item--current');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#advans-vis-header'),
				logo = $('.navbar-brand'),
				width = $('body').width(),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= $('body').height() ) {
				header.addClass('navbar-fixed-top advans-vis-animated slideInDown');
				logo.empty();
				logo.html('<img src="images/AdvansVisBlack.png" alt="brand-logo">');
				$('.cnt-nav p').css('color', 'black');
			} else if ( scrlTop <= 500) {
				$('.cnt-nav p').css('color', 'white');
				if(width <= 768){
					logo.empty();
					logo.html('<img src="images/AdvansVisBlack.png" alt="brand-logo">');
				}else {
					logo.empty();
					logo.html('<img src="images/AdvansVisWhite.png" alt="brand-logo">');
				}

				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top advans-vis-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top advans-vis-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

	var windowWidth = function(event){

		var logo = $('.navbar-brand');
		var navBar = $('#navbar');

		if($('body').width() < 751){
			navBar.addClass('collapse');
		}else{
			navBar.addClass('collapse in');
		}

		$( window ).resize(function() {
			if($('body').width() < 751){
				navBar.addClass('collapse');
			}else{
				navBar.addClass('collapse in');
			}

			if($('body').width() > 751 && $(this).scrollTop() < 500){
				logo.empty();
				logo.html('<img src="images/AdvansVisWhite.png" alt="brand-logo">');
			}else{
				logo.empty();
				logo.html('<img src="images/AdvansVisBlack.png" alt="brand-logo">');
			}
		});
	}



	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#advans-vis-home').length > 0 ) {

			$('#advans-vis-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#advans-vis-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#advans-vis-intro').length > 0 ) {

			$('#advans-vis-intro').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#advans-vis-intro .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#advans-vis-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);


					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#advans-vis-about');
		if ( about.length > 0 ) {	

			about.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var contactAnimate = function() {
		var contact = $('#advans-vis-contact');
		if ( contact.length > 0 ) {	

			contact.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};




	// Document on load.
	$(function(){

		parallax();
		burgerMenu();
		clickMenu();
		windowScroll();
		navigationSection();
		goToTop();


		// Animations
		homeAnimate();
		introAnimate();
		servicesAnimate();
		aboutAnimate();
		contactAnimate();
		windowWidth();

	});


}());