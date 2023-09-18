
const operatorDelete = document.querySelector('.operator_delete');
const operatorSumMinus = document.querySelector('.operator_sum_minus');
const operatorPercent = document.querySelector('.operator_percent');
const operatorDivision = document.querySelector('.operator_division');


let a = '';
let b = '';
let sign = '';
let finish = false;

// массивы чисел и операторов

const numbers = ['0' , '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const operators = ['+', '-', '×', '÷', '+/-', '%'];

// Экран вывода

let input = document.querySelector('.numberInput');


// Очистка экрана вывода

function clearAll () {
	a = '';
	b = '';
	sign = '';
	finish = false;
	input.textContent = '0';
}
operatorDelete.onclick = clearAll;


// 



document.addEventListener('click' , function(e) {


	// нажата не цифра
	if (!event.target.classList.contains('number') && 
		!event.target.classList.contains('number_o') && 
		!event.target.classList.contains('symbol_') && 
		!event.target.classList.contains('operator_sum_minus') &&
		!event.target.classList.contains('operator_percent') &&
		!event.target.classList.contains('operator_division') &&
		!event.target.classList.contains('operator_multiplication') && 
		!event.target.classList.contains('operator_subtraction') &&
		!event.target.classList.contains('operator_addition') && 
		!event.target.classList.contains('operator_equally')) {
		return;
	}
	// нажата кнопка очистки
	if (event.target.classList.contains('operator_delete')) {
		return;
	}
	input.textContent = '0';
	// получем нужную кнопку

	const key = event.target.textContent;
	if (numbers.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			input.textContent = a;
		}
		else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			input.textContent = b;
		}
		else {
			b += key;
			input.textContent = b;
		}
		console.log(a, b, sign);
		return;

	}
	if (operators.includes(key)) {
		sign = key;
		input.textContent = a;
	}




	// нажата = 
	if (key === '=') {
		if (b === '')  {
			b = a;
		}
		switch(sign) {
		 	case '+' :
		 		a = Number(a) + Number(b);
		 		break;
		 	case '-':
		 		a = Number(a) - Number(b);
		 		break;
		 	case '×':
		 		a = Number(a) * Number(b);
		 		break;
		 	case '÷':
		 		if (b === '0') {
		 			input.textContent = 'Ошибка';
		 			a = '';
		 			b = '';
		 			sign = '';
		 			finish = false;
		 			return;
		 		} else {
		 			a = Number(a) / Number(b);
		 		}
		 		break;
		 	case '%' :

		 		break;
		 	case '+' :
		 		a = Number(a) + Number(b);
		 		break;
		} 
		finish = true;
		input.textContent = a;
		console.log(a, b, sign);


	}








})








