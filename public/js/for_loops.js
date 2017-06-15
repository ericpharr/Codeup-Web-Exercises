"use strict"; 
do{
	var number = prompt("Type in a number between 1 and 10");

	for (var i = 1; i <= 10; i++) {
		console.log(number + "x" + i + "=" + number*i);
	}
} while (isNaN(number) || (number < 1 || number > 10));


/***************************/

var number = Math.floor(Math.random()*180)+20

for (var i = 0; i < 10; i++){
	var number = Math.floor(Math.random()*180)+20;  //For future reference: 
	if (number % 2 == 0){							//declare variables outside of loops
		console.log(number + " is even")
	} else {
		console.log(number + " is odd")
	}
}

/***************************/

for (var i = 1; i <= 10; i++){
	var number = i % 10;
	var number = number.toString();
	console.log(number.repeat(i));
}

for (var i = 1, j = 10, k = 4; i <= 10; i++, j--, k++){
	var number = i % 10;
	var number = number.toString();
	var numberspaces = number + " ".repeat(k)
	console.log(" ".repeat(j) + numberspaces.repeat(i));
}

/**************************/

for (var i = 0; i < 20; i++){
	console.log(100 - 5*i);
}

