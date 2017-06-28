"use strict";

function isNegative(number) {
	if (number < 0){
		return true;
	} else {
		return false;
	}
}

console.log(isNegative(-1)) // true
console.log(isNegative(6)) // false

function average (array) {
	var sum = 0;
	// for (i = 0; i < array.length; i++) {
	// 	sum += array[i];
	// }	
	array.forEach(function(element) {
		sum += element;
	})
	return sum/array.length;
}

 console.log(average([1, 2, 3])) // 2
 console.log(average([4, 6, 8, 10, 12])) // 8

function countOdds (array) {
	var numOdds = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 == 1) {
			numOdds += 1;
		}
	}
	return numOdds;
}

console.log(countOdds([1, 2, 3])) // 2
console.log(countOdds([4, 6, 8, 10])) // 0
console.log(countOdds([1, 2, 1, 1])) // 3

function convertNameToObject (string) {
	var names = string.split(" ");
	return {firstName: names[0], lastName: names[1]};
}

console.log(convertNameToObject('Harry Potter')) // {firstName: 'Harry', lastName: 'Potter'}
console.log(convertNameToObject('Ron Weasley')) // {firstName: 'Ron', lastName: 'Weasley'}

function fiveTo (number) {
	var array = [];
	for (var i = 5; i < number; i++) {
		array.push(i);
	}
	return array;
}

console.log(fiveTo(10)) // [5, 6, 7, 8, 9]
console.log(fiveTo(6)) // [5]

function upperCaseLastNames (array) {
	array.forEach(function(name) {
		name.lastName = name.lastName.replace(name.lastName[0], name.lastName[0].toUpperCase())
	})
	return array;
}

 var names = [
     {firstName: 'Harry', lastName: 'Potter'},
     {firstName: 'Ron', lastName: 'weasley'},
     {firstName: 'Hermione', lastName: 'granger'}
 ];
console.log(upperCaseLastNames(names));
 
 // [
 //    {firstName: 'Harry', lastName: 'Potter'},
 //    {firstName: 'Ron', lastName: 'Weasley'},
 //    {firstName: 'Hermione', lastName: 'Granger'}
 // ]
  