var buttons = document.querySelectorAll('.btn-calc');

var input = "";
var inputbox = document.getElementsByClassName('inputbox');
var a;
var b;
var operator;


buttons.forEach(function(button) {
	button.addEventListener('click', function(){
	if (button.innerText == 'AC'){
		clear();
	} else { 
		if (isNaN(a)){
			if (isNaN(button.innerText)) {
				logOperator(button.innerText);
			} else {
				input += button.innerText;
				inputbox[0].value = input;
			}	
		} else {
			switch(button.innerText) {
				case "=":
					b = input;
					result = operator(parseFloat(a), parseFloat(b));
					inputbox[0].value = result;
					a = result;
					b = undefined;
					input = "";
					break;
				default:
					if (isNaN(button.innerText)) {
						logOperator(button.innerText);
					} else {
						input += button.innerText;
						inputbox[0].value = input;
					}
			}
		}
	}
	})
})

// function()

function logOperator(symbol){
	switch(symbol) {
		case "+":
			operator = add;
			break;
		case "-":
			operator = subtract;
			break;
		case "÷":
			operator = divide;
			break;
		case "x": 
			operator = multiply;
			break;
	}

	a = input;
	// inputbox[1].value = symbol;
	input = "";
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

function doMath(operation, a, b) {
	return operation(a,b);	
}

function clear(){
	a = undefined;
	b = undefined;
	input = "";
	symbol = "";
	inputbox[0].value = "";
	// inputbox[1].value = "";
	// inputbox[2].value = "";
}