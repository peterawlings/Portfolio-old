/* global REACTOR:false, $:false */

var rm = rm || {};
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

'use strict';

$(function () {
    // rm.tree.init();
    rm.general.init();
    // rm.waypoints.init();

    var s = skrollr.init();

});