/*

//While Loop Example Goes Here

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;
function getRandomNumber (upper) {
	return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber ) {
	guess = getRandomNumber( upper );
	attempts += 1;
}

document.write ("<p>The random number was: " + randomNumber + "</p>");
document.write ("<p>It took the computer " + attempts + " attempts to get it right! </p>");

*/





/*

//Do While Loops Example Goes Here

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber (upper) {
	var num = Math.floor( Math.random() * upper ) + 1;
	return num;
}

do {
	guess = prompt( " I'm thinking of a number between 1 and 10. What is it?" );
	guessCount += 1;
	if ( parseInt(guess) === randomNumber ) {
		correctGuess = true;
	}
} while( ! correctGuess );
document.write ( '<h1> You guessed the number!</h1>' );
document.write ('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

*/




/*

//For Loop Goes Here

var html = '';
for (var i = 0; i <= 10; i += 1) {
	html += '<p>' + i + '</p>';
}

document.write (html);

*/


var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber (upper) {
	var num = Math.floor( Math.random() * upper ) + 1;
	return num;
}

while( guessCount < 5 ) {
	guess = prompt( " I'm thinking of a number between 1 and 10. What is it?" );
	guessCount += 1;
	if ( parseInt(guess) === randomNumber ) {
		correctGuess = true;
		break;
	}
} 

if( correctGuess ){
	document.write ( '<h1> You guessed the number!</h1>' );
	document.write ('<span>It took you ' + guessCount + ' tries to guess the number ' + randomNumber + '</span>');
} else {
	document.write ('<span> Sorry You Did not guess the Correct Number</span>');
}

