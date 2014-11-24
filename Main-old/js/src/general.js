/* global rm:false */

rm.general = (function() {
	'use strict';

	var init = function() {

		$(function() {
		    $('body').addClass('loaded');
		});

	};

	return {
		init: init
	};

}());