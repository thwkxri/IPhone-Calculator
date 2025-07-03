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
  lastAction.value = '';
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
  const inputValue = input.value.trim(); // Очищаем пробелы

  if (inputValue === '' || inputValue === 'Ошибка') return; // Пропускаем пустое поле или ошибку

  let lastNumberIndex = inputValue.search(/[\d.-]+$/); // Ищем последовательность цифр или минуса в конце строки

  if (lastNumberIndex >= 0) { // Есть ли число в конце строки?
    const numberPart = inputValue.slice(lastNumberIndex);
    
    // Если число начинается с минуса (-), значит оно отрицательное,
    // преобразуем его в положительное, убрав минус.
    if (numberPart.startsWith('-')) {
      const positiveNumber = numberPart.substring(1);
      
      // Собираем новую строку, заменяя старое значение новым положительным числом
      input.value = inputValue.substring(0, lastNumberIndex) + positiveNumber;
      result = inputValue.substring(0, lastNumberIndex) + positiveNumber;
    } else {
      // Число положительное, делаем его отрицательным, добавив минус впереди
      const negativeNumber = '-' + numberPart;
      
      // Собираем новую строку, заменяя старое значение новым отрицательным числом
      input.value = inputValue.substring(0, lastNumberIndex) + negativeNumber;
      result = inputValue.substring(0, lastNumberIndex) + negativeNumber;
    }
  }
})

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
   if (input.value != 'Ошибка' && !endWithOperator(input.value) && input.value != '') {
    input.value += '%';
    result += '%';
   }
})

dot.addEventListener('click', () => {
  if (input.value !== 'Ошибка' && !endWithOperator(input.value) && input.value !== '') {
    // Извлекаем последнее число из введённой строки
    const lastNumberMatch = input.value.match(/(\d+(?:\.\d*)?$)/);

    // Если найдено число
    if (lastNumberMatch) {
      const lastNumber = lastNumberMatch[0];

      // Проверяем, есть ли точка в последнем числе
      if (!lastNumber.includes('.')) {
        input.value += '.';
        result += '.';
      }
    }
  }
})

ravno.addEventListener('click', (e) => {
  if (input.value != eval(result) && input.value != 'Ошибка') {
    lastAction.value = input.value;
  }

  if (eval(result) == Infinity) {
    input.value = 'Ошибка';
  }
  else if (eval(result) != undefined) {
    let endValue = eval(result);
    result = endValue;
    input.value = endValue;
  }
})