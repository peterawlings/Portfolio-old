rm.single = (function () {
	'use strict';

	var initialize = function () {
		$('#single').text('Initialised single module');
	};

	return {
		init: initialize
	};
}());