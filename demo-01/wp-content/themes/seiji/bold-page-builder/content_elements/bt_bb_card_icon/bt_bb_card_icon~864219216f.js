
(function( $ ) {
	"use strict";

	$('.bt_bb_card_icon.bt_bb_show_content_on_hover').mouseenter(
		function() {
			$(this).find('.bt_bb_card_icon_content_inner').stop().slideDown(500);
		}).mouseleave(function() {
		$(this).find('.bt_bb_card_icon_content_inner').stop().slideUp(500);
	});


	$('.bt_bb_card_icon.bt_bb_hover_background_color').hover(
		function() {
			$(this).css('background-color', 'var(--hover-background-color)');
		}).mouseleave(function() {
			$(this).css('background-color', '');
	});

})( jQuery );

