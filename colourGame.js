
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

function changeColours() {
	var squares = document.getElementsByClassName('square');
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = generateRGB(generateValues());
	}
}

changeColours();