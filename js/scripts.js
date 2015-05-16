var questions = [
	['What is the name Bidrohi Koby?', 'kazi nazrul islam'],
	['What is the Capital of Bangladesh?', 'dhaka'],
	['Who is the number one All-Rounder on Cricket Now?', 'sakib al hasan'],
	['Who is prime minister of Bangladesh now?', 'shiekh hasina']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print (message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList (arr) {
	// body...
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions [i][0];
	answer = questions [i][1];
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else{
		wrong.push(question);
	}
}

html = '<p> You got ' + correctAnswers + ' questions(s) right. </p>';
html += '<h2>You got these questions correct: </h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(wrong);
print(html);