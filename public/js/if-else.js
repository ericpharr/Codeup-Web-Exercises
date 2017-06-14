"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'green'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

var message;
if (color == 'red') {
	message = "Red is the color of communists."
} else if (color == 'orange') {
	message = "Orange is the color of Donald Trump."
} else if (color == 'yellow') {
	message = "Yellow is the color of cowards."
} else if (color == 'green') {
	message = "Green is the color of n00bs."
} else if (color == 'blue') {
	message = "Blue is the color of sadness."
} else {
	message = "I do not know anything about that color."
}
console.log(message)

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

var message2 = (color == favorite) ? "This is your favorite!." : "This is not your favorite. :(";
console.log(message2)

var cameron = 180;
var ryan = 250;
var george = 320;

var bills = [{
	name: "Cameron",
	total: 180
},
{
	name: "Ryan",
	total: 250
},
{
	name: "George",
	total: 320
}]



for (var i=0; i < bills.length; i++) {
	if (bills[i].total < 200) {
		console.log(bills[i].name + " spent " + bills[i].total + " and got no discount.");
	} else {
		console.log(bills[i].name + " spent " + bills[i].total + " and paid " + bills[i].total * .9 + " after discount.");
	}
}

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin ==0){
	console.log("Buy a car")
} else {
	console.log("Buy a house")
}

var luckyNumber = Math.floor(Math.random()* 6)

switch (luckyNumber) {
	case (0):
		console.log("no discount, you pay $" + 60);
		break;
	case (1):
		console.log("10% discount! you pay $" + 60*.9);
		break;
	case (2):
		console.log("25% discound! you pay $" + 60*.75);
		break;
	case (3):
		console.log("35% discount! you pay $" + 60*.65);
		break;
	case (4):
		console.log("50% discount! you pay $" + 60*.5);
		break;
	case (5):
		console.log("You get it for free!");
		break;
}

alert("Would you like to enter a number?")

var userNumber = prompt("Enter a number");

if (userNumber % 2 == 0){
	alert('Your number is even');
} else {
	alert('Your number is odd');
}

// alert("Your number plus 100 is " + userNumber + 100);

// if (userNumber > 0)










