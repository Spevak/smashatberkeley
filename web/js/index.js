/*
 * This page was written by Geoffrey Lee (c) 2014
 * The 20xx Red Falco
 * P.S. Spevak is a scrub Marth
 */

$(document).ready(function(){
	$('#norcal-slideshow').bjqs({
		'height': 506,
		'width': 900,
		'responsive': true,
		'animspeed': 5000, // the delay between each slide
		'automatic': true, // automatic
		'showcontrols': false,
	});
	position_icon();
});
function position_icon(){
	left = $('.bjqs').offset().left
	$('#club_photo').css({
		'margin-left': left-35
	});
}
$(window).resize(function(){
	position_icon();
});

 