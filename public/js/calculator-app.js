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
				a = input;
				logOperator(button.innerText);
			} else {
				input += button.innerText;
				inputbox[0].value = input;
			}	
		} else {
			if (isNaN(button.innerText)) {
				if (button.innerText == "="){
					b = input;
					equals();
				} else {
					logOperator(button.innerText);
				}
				// case "=":
				// 	b = input;
				// 	equals();
				// 	// result = operator(parseFloat(a), parseFloat(b));
				// 	// inputbox[0].value = result;
				// 	// a = result;
				// 	// b = undefined;
				// 	// input = "";
				// 	break;
				// case isNaN(button.innerText):
				// 	logOperator(button.innerText);
				// 	break;
				// default:
				// 	input += button.innerText;
				// 	inputbox[0].value = input;
			} else {
			input += button.innerText;
			inputbox[0].value = input;
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
		case "%":
			if (input == a){
				operator = percent;
				equals();
				break;
			} else {
				break;
			}
		case "+/-":
			opposite();
			break;
	}

	// a = input;
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

function equals() {
		// b = input;
		result = operator(parseFloat(a), parseFloat(b));
		inputbox[0].value = result;
		a = result;
		// b = undefined;
		input = "";
		operator = identity;	
	
}

function percent() {
	return a/100;
}

function opposite() {
	tmp = inputbox[0].value;
	inputbox[0].value = -(parseFloat(tmp));
	input = inputbox[0].value;
	// if ((a == inputbox[0].value && b == inputbox[0].value) || b == inputbox[0].value) {
	// 	var tmp = parseFloat(inputbox[0].value);
	// 	tmp = -(tmp);
	// 	inputbox[0].value = tmp;
	// 	b = tmp;
	// }
	return -(tmp);
}

function identity(n){
	return n;
}