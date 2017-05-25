

//Generate single three digit number value
function generateValue() {
	var rgbArray = [];
	for (var i = 0; i <= 2; i++) {
		var randomNumber = Math.round(Math.random() * 255);
		rgbArray.push(randomNumber)
	}
	return rgbArray;	
}

//Convert number value to RGB string 
function generateRgbValue(arr) {
	var rgbString = arr.join(', ');
	return `rgb(${rgbString})`;
}

function changeSquaresColours() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = generateRgbValue(generateValue());
	}
}


var squares = document.getElementsByClassName('square');

changeSquaresColours();

var allSquaresDiv = document.getElementById('allSquaresDiv');

function whichSquareClicked(event) {
	var value = event.target.style.background;
	if (value == chosenSquare.style.background) {
		resultOfGuess.textContent = 'You guessed right';
		headingBackground.style.background = chosenSquare.style.background;
	}
	else {
		resultOfGuess.textContent = 'Guess again';
		event.target.style.display = 'none';
	}
}

allSquaresDiv.addEventListener('click', function(event) {
	whichSquareClicked(event);
});

var chosenSquare = squares[Math.floor(Math.random() * 3)];

// Update heading to show which RGB colour to pick
var headingRgbCode = document.getElementById('headingRgbCode');
headingRgbCode.textContent = `${chosenSquare.style.background}`;

var resultOfGuess = document.getElementById('resultOfGuess');

var headingBackground = document.querySelector('.bg-1');


