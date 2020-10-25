/* eslint-disable no-console */
//  таблица умножения

let table = "";
for (let i = 1; i <= 9; i += 1) {
  for (let j = 1; j <= 9; j += 1) {
    table += " " + i * j;

    if (i * j < 10) {
      table += " ";
    }
  }
  console.log(table);
  table = "";
}

// массив из 20 чисел который делится на 3 или 5 или 15
const numbers = [];
function array() {
  let number = 3;
  for (let counter = 0; counter <= 19; ) {
    const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
    if (matched) {
      counter += 1;
      numbers.push(number);
    }
    number += 1;
    console.log(numbers);
  }
}
array();

// Произведение элементов каждого 3 числа
function productNumbers() {
  let product = 1;
  for (let index = 2; index < 20; index += 3) {
    product *= numbers[index];
  }
  console.log(product);
}
productNumbers();
// MIN 
let min = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (min > numbers[index]) {
    min = numbers[index];
  }
}

console.log(`min = ${min}`);

// MAX 

let max = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (max < numbers[index]) {
    max = numbers[index];
  }
}

console.log(`max= ${max}`);

// Среднее арифметическое всех чисел
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
let total = sum / numbers.length;
console.log(total);

// Таблица умножения (функция)
const generateMatrix = () => {
  const matrix = [];
  for (let i = 0; i < 9; i += 1) {
    const row = [];
    for (let j = 0; j < 9; j += 1) {
      row.push((i + 1) * (j + 1));
    }
    matrix.push(row);
  }
  return matrix;
};
const printMatrix = (matrix) => {
  for (let i = 0; i < 9; i += 1) {
    let row = "";

    for (let j = 0; j < 9; j += 1) {
      row += ` ${matrix[i][j].toString()}\t `;
    }
    console.log(row);
  }
};
const matrix = generateMatrix();
printMatrix(matrix);

// Вывести диагональ
for (let i = 0; i < 9; i += 1) {
  let row = "";

  for (let j = 0; j < 9 - i; j += 1) {
    row += ` ${matrix[i][j].toString()}\t `;
  }
  console.log(row);
}

