/*

// Basic Arrays

var playList = [];
playList.push('I Did It My Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');
playList.unshift('Louie Louie', 'Maybellene');

function printList ( list ) {
	// body...
	var listHTML = '<div class="listDiv">';
	listHTML += '<ol>';
	for (var i = 0; i < playList.length; i += 1) {
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	listHTML += '</div>';
	document.write(listHTML);
}

printList(playList);

*/




/*

// Intermediate Level Arrays

var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print (message) {
	// body...
	document.write('<p>' + message + '</p>');
}

while(true){
	// Prompt for Input What user Needs to type
	search = prompt("Search for a product in our store. Type 'list' to show all of the product and 'quit' to exit");
	// To prevent errors from Uppercase and lower case conflict
	search = search.toLowerCase();
	// All statement Goes Here
	if (search === 'quit') {
		break;
	} else if (search === 'list') {
		print(
			inStock.join(', ')
			);
	}else{
		if ( inStock.indexOf( search ) > -1 ) {
			print('Yes, We have ' + search + ' in the store.');
		}else{
			print('Sorry, ' + search + ' item is not in stock.');
		}
	}
}

*/



// Two Dimensional Arrays

var playList = [
	['I Did It My Way', 'Frank Sinatra'],
	['Respact', 'Aretha Franklin'],
	['Imagine', 'John Lennon'],
	['Born to Run', 'Bruce Springsteen'],
	['Louie Louie', 'The Kingsmen'],
	['Maybellene', 'Chuck Berry']
];

function print (message) {
	// body...
	document.write(message);
}

function printSongs ( songs ) {
	// body...
	var listHTML = '<div class="listDiv">';
	listHTML += '<ol>';
	for (var i = 0; i < songs.length; i += 1) {
		listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
	}
	listHTML += '</ol>';
	listHTML += '</div>';
	document.write(listHTML);
}

printSongs(playList);