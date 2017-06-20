'use strict';

function identity(input){
	return input;
}

function getRandomNumber(min, max){
	return Math.floor(Math.random()*(max-min))+min;
}

function first(input) {
	var input = input.toString();
	return input.charAt(0)
}

function last(input) {
	var input = input.toString();
	return input.charAt(input.length - 1)
}

function rest(input) {
	var input = input.toString();
	return input.slice(1);
}

function reverse(input){
	var input = input.toString();
	var output = ''
	for (var i = 0; i <= input.length; i++){
		output += input.charAt(input.length - i);
	}
	return output;
}

function isNumeric(input) {
	if (isNaN(input) == true){
		return false;
	} else {
		return true;
	}
}

function count(input) {
	return input.length;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(numerator, denominator){
	return numerator / denominator;
}

function remainder(number, divisor){
	return number % divisor;
}

function square(a){
	return a*a;
}

function sumOfSquares(a, b){
	var aSquare = square(a);
	var bSquare = square(b);
	return add(aSquare, bSquare);
}

function doMath(operator, a, b) {

	// switch (operator){
	// 	case add:
	// 		return add(a, b);
	// 		break;
	// 	case subtract:
	// 		return subtract(a, b);
	// 		break;
	// 	case multiply:
	// 		return multiply(a, b);
	// 		break;
	// 	case divide:
	// 		return divide(a, b);
	// 		break;
	// 	case remainder:
	// 		return remainder(a, b);
	// 		break;
	// 	case square:
	// 		return square(a);
	// 		break;
	// 	case sumOfSquares:
	// 		return sumOfSquares(a, b);
	// 		break;
	return operator(a,b);
	
}



















