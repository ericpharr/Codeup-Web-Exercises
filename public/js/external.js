"use strict";

console.log("Hello from external JavaScript");

var favoriteColor = prompt("What is your favorite color?");

if (favoriteColor == "blue") {
	alert("I hate " + favoriteColor.toLowerCase() + "!")
} else {
	alert("What a coincidence! \n" + favoriteColor.toUpperCase() + " is MY favorite color!")

}

var bestSite = prompt("Do you agree that this is the best website?")

if (bestSite == "yes") {
	alert("Of course it is!")
} else {
	var bestSite = prompt("Do you agree that this is the best website?")
}