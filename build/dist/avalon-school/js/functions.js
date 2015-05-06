
$(function(){
	$('.js--menu').click(function(){
		$('.ui--menu').toggleClass('is-active');
	});

	/*$('.sidebar-menu a').on('click', function() {
		$(this).hasClass('is-active') ? $(this).removeClass('is-active') : $(this).addClass('is-active');

		return false;
	});*/

	$('.sidebar-toggle').on('click', function() {
		$(this).toggleClass('toggle-is-active');
		$('.sidebar-menu').toggleClass('sidebar-is-active');
	});
});