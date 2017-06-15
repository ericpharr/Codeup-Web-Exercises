"use strict";

var i = 1;

while (i <= 16) {
	console.log(Math.pow(2,i));
	i++;
}

/****************************/

var allCones = Math.floor(Math.random() * 50) + 50

var cones = Math.floor(Math.random() * 5) + 1

while (allCones >= 0) {
	if (allCones == 0){
		console.log("Yay! I sold them all!");
		break;
	} else if (cones <= allCones) {
		console.log(cones + ' cones sold')
		allCones -= cones;
		cones = Math.floor(Math.random() * 5) + 1;
	} else {
		console.log("Can't sell you " + cones + " cones, I only have " + allCones + "...");
		cones = Math.floor(Math.random() * 5) + 1;
	}
}