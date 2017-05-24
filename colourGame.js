


function generateValues() {
	var arr = [];
	for (var i = 0; i <= 2; i++) {
		var random = Math.round(Math.random() * 255);
		arr.push(random)
	}
	return arr.join(', ');	
}

function generateRGB(values) {
	return `rgb(${values})`;
}


//Generate random RGB code 
var guess = generateValues();
var guessCode = generateRGB(guess);
// Set random RGB code as background on first div
var heading = document.getElementsByClassName('bg-1')[0];
heading.style.background = guessCode;

var headingRgbCode = document.getElementById('rgb');
headingRgbCode.textContent = `(${guess})`;

// Select a random number from 0 - 3
var squareId = Math.floor(Math.random() * 3);
// Use this number to select corresponding square div
var squares = document.getElementsByClassName('square');

function changeColours() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = generateRGB(generateValues());
	}
}

changeColours();

// Set the same RGB code on this square div as original background
var chosenSquare = squares[squareId];
chosenSquare.id = squareId;
chosenSquare.style.background = guessCode;


