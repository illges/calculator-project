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

function operate(a, b, operator) {
	if(operator === '+'){
		c = document.getElementById('display').innerHTML = add(a, b);
		return c
	} else if (operator === '-'){
		c = document.getElementById('display').innerHTML = subtract(a, b);
		return c
	} else if (operator === '*'){
		c = document.getElementById('display').innerHTML = multiply(a, b);
		return c
	} else if (operator === '/'){
		c = document.getElementById('display').innerHTML = divide(a, b);
		return c
	} else {
		reset();
	}
}

function clear() {
	return document.getElementById('display').innerHTML = ''
}

function reset() {
	a = undefined;
	b = undefined;
	c = undefined;
	clear();
	console.clear();
}


function display(e) {
	return document.getElementById('display').insertAdjacentHTML('beforeend', `${e.target.innerHTML}`);
}

let a, b, c, operator;

const num_btn = Array.from(document.querySelectorAll('.number'));
num_btn.forEach(btn => 
	btn.addEventListener('click', e => {
		if (isNaN(document.getElementById('display').innerHTML) === true) {
		clear();
		}
		display(e)})
);

const oper_btn = Array.from(document.querySelectorAll('.operator'));
oper_btn.forEach(btn => {
	btn.addEventListener('click', () => {
		if (!a) {
			a = +document.getElementById('display').innerHTML;
		} else {
			b = +document.getElementById('display').innerHTML;
		}
	})
	btn.addEventListener('click', e => operator = e.target.innerHTML)
	btn.addEventListener('click', clear)
	btn.addEventListener('click', e => display(e))
});

const clr_btn = document.getElementById('clear');
clr_btn.addEventListener('click', reset);

const equ_btn = document.getElementById('equal');
equ_btn.addEventListener('click', () => {
	if (!a) {
			a = +document.getElementById('display').innerHTML;
		} else {
			b = +document.getElementById('display').innerHTML;
		}
	operate(a, b, operator)
	console.log(c)
});
