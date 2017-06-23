x = ["5", "+", "3", "x", "2", "+", "1", "x", "2", "-", "8", "÷", "2", "÷", "1"] //---> x = ["5", "+", "6", "-", "1"]

var tmp;

function evaluate(x){
	while (x.length > 1){
		for (var i = 0; i < x.length+1; i++){
			if (x[i] == "x" || x[i] == "÷") {
				tmp = (x[i] == "x") ? parseFloat(x[i-1]) * parseFloat(x[i+1]) : parseFloat(x[i-1]) / parseFloat(x[i+1]);
				x.splice(i-1, 3, tmp);
				console.log(x);
				i-=1;
			}  
		}
		for (var j = 0; j < x.length+1; j++){
			if (x[j] == "-") {
				tmp = -(parseFloat(x[j+1]));
				x[j] = "+";
				x[j+1] = tmp;
				console.log(x);
				j-=1;
			}
		}
		for (var k=0; k < x.length+1; k++){
			if (x[k] == "+") {
				tmp = parseFloat(x[k-1]) + parseFloat(x[k+1])
				x.splice(k-1, 3, tmp);
				console.log(x);
				k-=1;
			}
		}
	}
	return x;
}