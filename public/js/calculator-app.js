"use strict";
/*

Variables:

Kept as simple as possible:

1.buttons - node list of all buttons of class 'btn-calc'
2.newInput - user input currently being typed
3.inputbox - calculator display
4.input - array of inputs to be arithmetically evaluated

*/
var buttons = document.querySelectorAll('.btn-calc');
var newInput = "";
var inputbox = document.getElementsByClassName('inputbox')[0];
var input = [];
/*

Event listener:

Could possibly? be simpler and refactored to only check if input is a number or otherwise,
with additional logic handled by other functions.

*/
buttons.forEach(function(button) {
	button.addEventListener('click', function(){
		console.log(button.innerText);
		console.log(button.dataset.op);
		if (!isNaN(button.innerText) && input.length == 1){		 //prevents infinite loop if user forgets to clear after previous operation
			input = [];
			newInput = button.innerText;
			inputbox.value = newInput;
		} else if (!isNaN(button.innerText) && button.innerText.length > 0) {		             //checks for input of numbers
				newInput += button.innerText;
				inputbox.value = newInput;
		} else if (button.innerText == ""){
			selectOperator(button.dataset.op);
		} else {
			selectOperator(button.innerText);
		}							            //checks for input of operators
	})
})
/*

selectOperator function:

This parses all non-numeric inputs.

*/
function selectOperator(symbol){
	switch(symbol) {
		case "+":
			basicOperator("+");
			break;
		case "-":
			basicOperator("-");
			break;
		case "÷":
			basicOperator("÷");
			break;
		case "x":
			basicOperator("x");
			break;
		case "=":
			equals();
			break;
		case ".":
			inputDecimalPoint();
			break;
		case "%":
			specialOperator(percent);
			break;
		case "+/-":
			specialOperator(opposite);
			break;
		case "AC":
			clear();
			break;
		case "x2":
			specialOperator(square);
			break;
		case "x3":
			specialOperator(cube);
			break;
		case "ex":
			specialOperator(etox);
			break;
		case "10x":
			specialOperator(tentox);
			break;
		case "reciprocal":
			specialOperator(reciprocal);
			break;
		case "squareroot":
			console.log("rooted!");
			specialOperator(sqrt);
			break;
		case "cuberoot":
			specialOperator(cubert);
			break;
		case "ln":
			specialOperator(ln);
			break;
		case "log10":
			specialOperator(log10);
			break;
	}
}

function clear(){
	input = [];
	newInput = "";
	inputbox.value = "";
}

function inputDecimalPoint() {
	if (newInput.match("\\.") != "."){
		newInput += ".";
		inputbox.value = newInput;
	}
}
/*

equals function:

Handles the functionality of the "=" button

TODO: will eventually need to log previous inputs to repeat last operation,
to best emulate the functionality of standard calculators

*/
function equals() {
	if (input.length > 0 && newInput.length > 0) {
		input.push(newInput);
		input = evaluate(input);
		inputbox.value = input.toString();
		newInput = "";
	} else if (input.length % 2 == 1){
		input = evaluate(input);
		inputbox.value = input.toString();
		newInput = "";
	} else {
		identity(input);
	}
}
/*

basicOperator function:
Handles operations which requires two inputs and pushes them onto the
input array for evaluation.

May also need to be used for similar, non-basic operations which require two inputs
to extend calculator functionality to include scientific functions.

*/
function basicOperator(symbol) {					//Basic operator function takes operator symbol as a string, and pushes
	if (newInput.length > 0){
		input.push(newInput, symbol);
		newInput = "";
	} else if (input.length == 1) {
		input.push(symbol);
	}else if (input.length > 1 &&input[input.length - 1] != symbol){
		input[input.length - 1] = symbol;
		identity(input);
	} else {
		identity(input);
	}
}
/*

Evaluate function:

Evaluates numeric expressions, following order of operations for +, -, x, ÷

TODO: This should be refactored to evaluate expressions as they are typed,
though the code will possibly need to be retained for some cases.

*/
function evaluate(x) {
	var tmp;
	// console.log(x);

	while (x.length > 1){
		for (var i = 0; i < x.length+1; i++){
			if (x[i] == "x" || x[i] == "÷") {
				tmp = (x[i] == "x") ? parseFloat(x[i-1]) * parseFloat(x[i+1]) : parseFloat(x[i-1]) / parseFloat(x[i+1]);
				x.splice(i-1, 3, tmp);
				// console.log(x);
				i-=1;
			}
		}
		for (var j=0; j < x.length+1; j++){
			if (x[j] == "+" || x[j] == "-") {
				tmp = (x[j] == "+") ? parseFloat(x[j-1]) + parseFloat(x[j+1]) : parseFloat(x[j-1]) - parseFloat(x[j+1]);
				x.splice(j-1, 3, tmp);
				// console.log(x);
				j-=1;
			}
		}
	}

	return [parseFloat(x[0].toPrecision(15).toString())];	//Returns value to 15 decimal point precision,
}															//This could be extended to allow user to change number of decimals to display.


/*

specialOperator function:

The special operator function changes newInput variable and display before it is pushed onto the input array.
All functions compatible with the specialOperator function are listed below it.

Most extensions to calculator functionality can go here.

*/

function specialOperator(operator){
	if (newInput.length > 0) {
		input.push(parseFloat(operator(newInput).toPrecision(15)).toString());
		inputbox.value = parseFloat(operator(newInput).toPrecision(15)).toString();
		newInput = "";
	} else if (input.length == 1) {
		input = [parseFloat(operator(input).toPrecision(15).toString())];
		inputbox.value = input.toString();
	} else if (input.length % 2 == 1 && newInput.length == 0) {
		input[input.length - 1] = parseFloat(operator(input[input.length - 1]).toPrecision(15).toString());
		inputbox.value = input[input.length - 1].toString();
	}
}

function percent(n) {
	return n/100;
}

function opposite(n) {
	return -n;
}

function identity(n){
	return n;
}

function sqrt(n) {
	return Math.sqrt(n);
}

function cubert(n) {
	return Math.pow(n, 1/3);
}

function ythRootX (x, y) {
	return Math.pow(n, 1/y);
}

function ln(n) {
	return Math.log(n);
}

function log10(n) {
	return Math.log(n)/Math.log(10);
}

function log2(n) {
	return Math.log(n)/Math.log(2);
}

function logY(n, y) {
	return Math.log(n)/Math.log(y);
}

function reciprocal(n) {
	return 1/n;
}

function square(n) {
	return Math.pow(n, 2);
}

function cube(n) {
	return Math.pow(n, 3);
}

function etox(n) {
	return Math.pow(Math.E, n);
}

function tentox(n) {
	return Math.pow(10, n)
}

function xToYthPower(x, y) {
	return Math.pow(x, y);
}

function e() {
	return Math.E;
}

function pi() {
	return Math.PI;
}

function sinRad(n) {
	return Math.sin(n);
}

function cosRad(n) {
	return Math.cos(n);
}

function tanRad(n) {
	return Math.tan(n);
}

function sinDeg(n) {
	return Math.sin(n * (Math.PI/180));
}

function cosDeg(n) {
	return Math.cos(n * (Math.PI/180));
}

function tanDeg(n) {
	return Math.tan(n * (Math.PI/180));
}

function sinh(n) {
	return (1 - Math.pow(Math.E, -2* n))/(2 * Math.pow(Math.E, -n));
}

function cosh(n) {
	return (1 + Math.pow(Math.E, -2* n))/(2 * Math.pow(Math.E, -n));
}

function tanh(n) {
	return (1 - Math.pow(Math.E, -2* n))/(2 * Math.pow(Math.E, -n));
}

function asinRad(n) {
	return Math.asin(n);
}

function acosRad(n) {
	return Math.acos(n);
}

function atanRad(n) {
	return Math.atan(n);
}

function asinDeg(n) {
	return Math.asin(n * (Math.PI/180));
}

function acosDeg(n) {
	return Math.acos(n * (Math.PI/180));
}

function atanDeg(n) {
	return Math.atan(n * (Math.PI/180));
}

function asinh(n) {
	return Math.log(n + Math.pow(Math.pow(n, 2) + 1, 1/2));
}

function acosh(n) {
	return Math.log(n + Math.pow(Math.pow(n, 2) - 1, 1/2));
}

function atanh(n) {
	return (1/2) * Math.log(Math.pow((1 + n)/(1 - n), 1/2));
}
