const input = document.getElementById('input');

const AC = document.getElementById('AC');
const abs = document.getElementById('abs');
const remainder = document.getElementById('remainder');
const del = document.getElementById('del');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const umn = document.getElementById('umn');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const ravno = document.getElementById('ravno');

const lastAction = document.getElementById('last-action')

let result = input.value;

function endWithOperator(value) {
  const operators = ['+', '-', '×', '÷', '.'];
  return operators.includes(value.slice(-1));
}

AC.addEventListener('click', () => {
  input.value = '';
  result = '';
  lastAction.textContent = '';
})

one.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '1';
    result += '1';
  }
})

two.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '2';
    result += '2';
  }
})

three.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '3';
    result += '3';
  }
})

four.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '4';
    result += '4';
  }
})

five.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '5';
    result += '5';
  }
})

six.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '6';
    result += '6';
  }
})

seven.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '7';
    result += '7';
  }
})

eight.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '8';
    result += '8';
  }
})

nine.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '9';
    result += '9';
  }
})

zero.addEventListener('click', () => {
  if (input.value != 'Ошибка' && input.value.slice(-1) != ')') {
    input.value += '0';
    result += '0';
  }
})

abs.addEventListener('click', () => {
  const inputValue = input.value.trim(); // очищаем пробелы

  if (inputValue === '' || inputValue === 'Ошибка') return; // пропускаем пустые поля или ошибку

  let lastNumberIndex = inputValue.search(/[\d.-]+$/); // находим индекс последней последовательности чисел или минуса

  if (lastNumberIndex >= 0) { // проверяем наличие числа в конце строки
    const numberPart = inputValue.slice(lastNumberIndex);

    // Проверяем начало числа на минус
    if (numberPart.startsWith('-')) {
      // Если число отрицательное, просто уберём минус
      const positiveNumber = numberPart.substring(1);

      // Новый вариант: число остаётся положительным
      input.value = inputValue.substring(0, lastNumberIndex) + positiveNumber;
      result = inputValue.substring(0, lastNumberIndex) + positiveNumber;
    } else {
      // Если число положительное, заключаем новое отрицательное число в скобки
      const negativeNumberInBrackets = `(-${numberPart})`;

      // Замещаем старым значением новый вариант с минусов в скобках
      input.value = inputValue.substring(0, lastNumberIndex) + negativeNumberInBrackets;
      result = inputValue.substring(0, lastNumberIndex) + negativeNumberInBrackets;
    }
  }
});

plus.addEventListener('click', () => {
  if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '+';
    result += '+'
  }
})

minus.addEventListener('click', () => {
  if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '-';
    result += '-'
  }
})

del.addEventListener('click', () => {
  if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '÷';
    result += '/';
  }
})

umn.addEventListener('click', () => {
  if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '×';
    result += '*';
  }
})

remainder.addEventListener('click', () => {
  input.value += '%';
  result += '%';
})

dot.addEventListener('click', () => {
  if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '.';
    result += '.';
  }
})

ravno.addEventListener('click', (e) => {
  if (input.value != eval(result)) {
    lastAction.textContent = input.value;
  }

  if (eval(result) == Infinity) {
    input.value = 'Ошибка';
  }
  else if (eval(result) != undefined) {
    let endValue = eval(result);
    result = endValue;
    input.value = endValue;
  }
});
