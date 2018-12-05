let a, b, c, operator;

//Dom Events

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
		 if (!a || c) {
			a = +document.getElementById('display').innerHTML;
		} else {
			b = +document.getElementById('display').innerHTML;
		}

		c = undefined;
	})
	btn.addEventListener('click', e => operator = e.target.innerHTML)
	btn.addEventListener('click', clear)
	btn.addEventListener('click', e => display(e))
});

const clr_btn = document.getElementById('clear');
clr_btn.addEventListener('click', () => reset(c));

const equ_btn = document.getElementById('equal');
equ_btn.addEventListener('click', () => {
	if (!a || c) {
			a = +document.getElementById('display').innerHTML;
		} else {
			b = +document.getElementById('display').innerHTML;
		}
	operate(a, b, operator)
	console.log('c = ' + c)
	console.log('b = ' + b)
	console.log('a = ' + a)
});

//Functions

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
		//reset();
		return c
	} else if (operator === '-'){
		c = document.getElementById('display').innerHTML = subtract(a, b);
		//reset();
		return c
	} else if (operator === '*'){
		c = document.getElementById('display').innerHTML = multiply(a, b);
		//reset();
		return c
	} else if (operator === '/'){
		c = document.getElementById('display').innerHTML = divide(a, b);
		//reset();
		return c
	} else {
		reset(c);
	}
}

function clear() {
	return document.getElementById('display').innerHTML = ''
}

function reset() {
	if (arguments.length > 0) {
		a = undefined;
		b = undefined;
		c = undefined;
		clear();
		console.clear();
	} else {
		a = undefined;
		b = undefined;
	} 
}


function display(e) {
	return document.getElementById('display').insertAdjacentHTML('beforeend', `${e.target.innerHTML}`);
}


