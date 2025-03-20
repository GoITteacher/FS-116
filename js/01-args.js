/**
 * Псевдомасив arguments и Array.from
 */

// function getCar(x, y, q, t, m) {}

// getCar(10, 20);

//!======================================================

// function showArguments(x) {
//   const arr = Array.from(arguments);

//   for (const elem of arr) {
//     console.log(elem);
//   }

//   const fristElem = arr[0];
//   const secondElem = arr[1];
//   arr.push()
// }

// showArguments(10, 20, 30);

//!======================================================
// function sum(x1,x2) {
//   let res = 0;

//   for (const elem of arguments) {
//     res += elem;
//   }

//   console.log(res);
// }

// sum(10, 20, 30);
// sum(10, 20, 30, 10, 20);

//!======================================================

//!======================================================
// function foo() {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);
//!======================================================
/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   const args = Array.from(arguments);// [1, 2, 4, 5, 6]
//   let sum = 0;

//   for (const number of args) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(add(1, 2, 3, 4, 1, 2));
// console.log(add(1, 2, 4, 5, 6));
//!======================================================
/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const arr = Array.from(arguments);
//   let sum = 0;

//   for (const item of arr) {
//     sum += item;
//   }

//   return sum / arr.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//!======================================================

// function getMessage() {
//   const arr = Array.from(arguments);
//   const message = arr.join(' ');
//   return message;
// }

// console.log(getMessage('Hello', 'World'));

//!======================================================
