function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return a / b
}

function operate() {
	
}


function display(e) {
	

	return document.getElementById('display').innerHTML = `${e.target.innerHTML}`;
	//return console.log(e.target.innerHTML);

}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', e => display(e)));


