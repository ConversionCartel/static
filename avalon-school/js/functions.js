
$(function(){
	$('.js--menu').click(function(){
		$('.ui--menu').toggleClass('is-active');
		return false;
	});

	$('.sidebar-menu a').on('click', function() {
		if ($('.sidebar-menu a').hasClass('is-active')) {
			$('a').removeClass('is-active');
		}
		$(this).addClass('is-active');

		return false;
	});
});