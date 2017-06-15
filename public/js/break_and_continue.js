"use strict";

var oddNumber = prompt("Please enter an odd number between 1-50:");

for (i = 1; i < 50; i++){
	if ((oddNumber % 2 == 0) || (oddNumber > 50) || (oddNumber < 1)) {
		oddNumber = prompt("Please enter an odd number between 1-50:");
		continue;
	} else if (i % 2 == 0) {
		continue;
	} else if (i == oddNumber) {
		console.log("Yikes! Skipping number: " + oddNumber);
	} else {
		console.log("Here is an odd number: " + i);
	}
}