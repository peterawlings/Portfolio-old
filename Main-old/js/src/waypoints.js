/* global rm:false */

rm.waypoints = (function() {
	'use strict';

	var init = function() {

		$('.recent-work').waypoint(function(direction) {

			var cols = $(this).find('.slideIn');

			$(cols[0]).stop().delay(100).animate({
				'opacity': '1',
				'top': '0'
			}, 300, 'easeOutQuad');
			$(cols[1]).stop().delay(200).animate({
				'opacity': '1',
				'top': '0'
			}, 300, 'easeOutQuad');
			$(cols[2]).stop().delay(300).animate({
				'opacity': '1',
				'top': '0'
			}, 300, 'easeOutQuad');

		}, {
			offset: '50%'
		});

	};

	return {
		init: init
	};

}());