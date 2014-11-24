var rm = rm || {};
rm.utilities = (function() {
	'use strict';

	var reverseString = function(input) {
		if (typeof input !== 'string') {
			return undefined;
		}
		return input.split('').reverse().join('');
	};

	return {
		reverseString: reverseString
	};
}());
rm.single = (function () {
	'use strict';

	var initialize = function () {
		$('#single').text('Initialised single module');
	};

	return {
		init: initialize
	};
}());
rm.multiple = {};
rm.multiple.create = function ($element, startingCount) {
	'use strict';

	// initialise plugin
	var currentCount = startingCount;
	$('.count', $element).text('Count: ' + currentCount);

	// define functions
	var updateCount = function() {
		currentCount++;
		$('.count', $element).text('Count: ' + currentCount);
	};
	var getCount = function() {
		return currentCount;
	};

	// attach events
	// standard click handler
	$('.updateThis', $element).on('click', updateCount);
	
	// Use pub/sub for update all
	// subscribe to the event
	$.subscribe('updateAll', updateCount);

	// publish the event when "Update all" is clicked
	$('.updateAll', $element).on('click', function() {
		$.publish('updateAll');
	});

	// return public api
	return {
		increment: updateCount,
		getCount: getCount
	};
};