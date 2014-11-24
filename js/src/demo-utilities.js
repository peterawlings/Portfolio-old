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