/* eslint-disable no-console */
//  таблица умножения
function matrix() {
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
}
matrix();

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
