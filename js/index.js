/**
 * Onload handler
 */
$(document).ready(function() {
	// Enable dropdowns
	$('.dropdown-toggle').dropdown();

	// Start carousel
	$('.carousel').carousel({
		interval : 4000,
		pause : 'hover'
	});

});

$(window).bind("load", function() {
	$('.home-box').addClass('loaded');
});