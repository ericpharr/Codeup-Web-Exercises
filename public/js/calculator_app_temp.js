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
		if (!isNaN(button.innerText) && input.length == 1){		 //prevents infinite loop if user forgets to clear after previous operation
			input = [];
			newInput = button.innerText;
			inputbox.value = newInput;
		} else if (!isNaN(button.innerText)) {		             //checks for input of numbers
				newInput += button.innerText;
				inputbox.value = newInput;
		} else {									            //checks for input of operators
			selectOperator(button.innerText);
		}
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
	} else if (input[input.length - 1] != symbol){
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
	newInput = operator(parseFloat(newInput)).toString();
	inputbox.value = newInput.toString();
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