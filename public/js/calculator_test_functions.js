x = ["5", "+", "3", "x", "2", "+", "1", "x", "2", "-", "8", "÷", "2", "÷", "1"] //---> x = ["5", "+", "6", "-", "1"]

var tmp;

function evaluate(x){
	var tmp;

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
	return x;
}


main

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
			} else {
			input += button.innerText;
			inputbox[0].value = input;
			}
		}
	}