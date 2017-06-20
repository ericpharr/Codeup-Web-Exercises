(function(){

var noun = [];
var timeOfDay = [];
var bodyPart = [];
var verb = [];
var nounPlural = [];
var adjective = [];
var adverb = [];

var numNoun = 6;
var numAdjective = 3;
var numNounPlural = 2;
var numBodyPart = 4;
var numTimeOfDay = 1;
var numVerb = 5;
var numAdverb = 1;

var input;


for (i = 0; i < numNoun; i++){
	input = prompt("Please enter a noun.");
	noun.push(input)
}


for (i = 0; i < numAdjective; i++){
	input = prompt("Please enter an adjective.");
	adjective.push(input)
}

for (i = 0; i < numBodyPart; i++){
	input = prompt("Please enter a body part.");
	bodyPart.push(input)
}

for (i = 0; i < numTimeOfDay; i++){
	input = prompt("Please enter a time of day.");
	timeOfDay.push(input)
}

for (i = 0; i < numAdverb; i++){
	input = prompt("Please enter a adverb.");
	adverb.push(input)
}

for (i = 0; i < numNounPlural; i++){
	input = prompt("Please enter a noun (plural).");
	nounPlural.push(input)
}

for (i = 0; i < numVerb; i++){
	input = prompt("Please enter a verb.");
	verb.push(input)
} 

console.log("I can feel the " + noun[0] + " of the " + timeOfDay[0] + " " + noun[1] + " on my " + bodyPart[0] + ". " +
"The " + noun[2] + " around my " + bodyPart[1] + " is " + adjective[0] + " and I’m tempted to " + verb[0] + ". " + 
"Instead I carry on, knowing my body will get used to the " + noun[3] + " the further I " + verb[1] + ". My " + 
bodyPart[2] + " feels " + adjective[1] + " as the " + nounPlural[0] + " " + verb[2] + " against my " + bodyPart[3] + ". " + 
"I resist the temptation to " + verb[3] + " and " + verb[4] + " at the empty " + noun[4] + " where my " + adverb[0] + 
" " + adjective[2] + " " + nounPlural[1] + " and a note explaining why, are in a " + noun[5] + ".")
})();