
$(function(){
	$('.js--menu').click(function(){
		$('.ui--menu').toggleClass('is-active');
	});

	var $sidebar = $('.sidebar-menu a');
	$sidebar.on('click', function() {
		$sidebar.removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.sidebar-toggle').on('click', function() {
		$(this).toggleClass('toggle-is-active');
		$('.sidebar-menu').toggleClass('sidebar-is-active');
	});


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