
$(function(){
	$('.js--menu').click(function(){
		$('.ui--menu').toggleClass('is-active');
		return false;
	});
	$('.ui--menu li a').on('click', function() {
		$('.ui--menu').removeClass('is-active');
	});

	/* I guess we don't need this anymore if we're going to create the actual pages?
		var $sidebar = $('.sidebar-menu a');
		$sidebar.on('click', function() {
			$sidebar.removeClass('is-active');
			$(this).addClass('is-active');
		});
	*/


	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 100) {
		    $('nav.menu').addClass('is-fixed');
		} else {
		    $('nav.menu').removeClass('is-fixed');
		}
	};

	stickyNav();

	$(window).scroll(function() {
	    stickyNav();
	});


});