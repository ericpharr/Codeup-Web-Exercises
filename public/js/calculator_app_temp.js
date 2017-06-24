var buttons = document.querySelectorAll('.btn-calc');

var newInput = "";
var inputbox = document.getElementsByClassName('inputbox');
var input = [];
var operator;

buttons.forEach(function(button) {
	button.addEventListener('click', function(){
		if (button.innerText == 'AC'){
		clear();
		} else {
		//if (input.length == 0 /* || isNaN(input[input.length - 1])*/){
			if (!isNaN(button.innerText) && input.length == 1){
				input = [];
				newInput = button.innerText;
				inputbox[0].value = newInput;
			} else if (!isNaN(button.innerText)) {
					newInput += button.innerText;
					inputbox[0].value = newInput;
			} else {
				selectOperator(button.innerText);
			}
		}
	})
})

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
			if (input.length > 0 && newInput.length > 0) {
				input.push(newInput);
				input = equals(input);
				inputbox[0].value = input.toString();
				newInput = "";
			} else {
				identity(input);
			}
			break;
		case "%":
			specialOperator(percent);
			break;
			// }
		case "+/-":
			specialOperator(opposite);
			break;
		case ".":
			if (newInput.match("\\.") != "."){
				newInput += ".";
				inputbox[0].value = newInput;
			}
			break;
	}
}	

function clear(){
	input = [];
	newInput = "";
	// symbol = "";
	inputbox[0].value = "";
}

function basicOperator(symbol) {
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

function equals(x) {
	var tmp;
	console.log(x);
	
	while (x.length > 1){
		for (var i = 0; i < x.length+1; i++){
			if (x[i] == "x" || x[i] == "÷") {
				tmp = (x[i] == "x") ? parseFloat(x[i-1]) * parseFloat(x[i+1]) : parseFloat(x[i-1]) / parseFloat(x[i+1]);
				x.splice(i-1, 3, tmp);
				console.log(x);
				i-=1;
			}  
		}
		for (var j=0; j < x.length+1; j++){
			if (x[j] == "+" || x[j] == "-") {
				tmp = (x[j] == "+") ? parseFloat(x[j-1]) + parseFloat(x[j+1]) : parseFloat(x[j-1]) - parseFloat(x[j+1]);
				x.splice(j-1, 3, tmp);
				console.log(x);
				j-=1;
			}
		}
	}

	return x;//[parseFloat(x[0].toPrecision(15).toString())];	
}

function specialOperator(operator){
	newInput = operator(parseFloat(newInput)).toString();
	inputbox[0].value = newInput.toString();
	// newInput = "";
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