/* global rm:false, Snap:false */

rm.tree = (function() {
	'use strict';

	var init = function() {

		var tree = Snap.select('#svgtree');
		var leaf = ['leaf-1','leaf-2','leaf-3','leaf-4','leaf-5','leaf-6','leaf-7','leaf-8','leaf-9','leaf-10','leaf-11','leaf-12','leaf-13','leaf-14','leaf-15','leaf-16','leaf-17','leaf-18','leaf-19','leaf-20','leaf-21','leaf-22','leaf-23','leaf-24','leaf-25','leaf-26','leaf-27','leaf-28','leaf-29','leaf-30','leaf-31','leaf-32'];
		

		// Lets us get random numbers from within a range we specify. From MDN docs.
		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}

		function animateObject(treeObject, cx, cy){
			// flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
			var timing = getRandomArbitrary(1000,4000); // Random transition time between times we specify
		    var deg = getRandomArbitrary(-30,30); // Random rotation (allows it to go either direction)
		    // Animate the flake and do a new animation for it when it's done (repeat this function)
			treeObject.stop().animate({ transform: 't0 0 r'+deg+' '+cx+' '+cy}, timing, function(){ animateObject(treeObject, cx, cy);});
		}

		function leafAnimate(){
			for (var i=0; i<leaf.length; i++){
				var flakeId = leaf[i];
				var treeObject = tree.select('#'+flakeId); // Select each individual flake from our list
				var cx = treeObject.getBBox().cx; // Get its initial coordinates
				var cy = treeObject.getBBox().cy;
				
				animateObject(treeObject, cx, cy); // Send it to be infinitely animated
			}
		}
		leafAnimate();
	};

	return {
		init: init
	};

}());