/*
 * Метод window.setTimeout(callback, delay, args)
 */
//!======================================================
// console.log('START');

// setTimeout(function () {
//   console.log('Hello timeout');
// }, 0);

// for (let i = 0; i < 10000; i++) {
//   console.log('HELLO');
// }

// console.log('END');
//!======================================================

// setTimeout(function () {
//   console.log('Hello timeout1');
// }, 3000);

// setTimeout(function () {
//   console.log('Hello timeout2');
// }, 1000);

// setTimeout(function () {
//   console.log('Hello timeout3');
// }, 2000);

//!======================================================

// for (let i = 0; i < 5; i++) {
//   setTimeout(()=>{}, i * 1000, i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     showX(i);
//   }, i * 1000);
// }

// function showX(x) {
//   console.log('x=', x);
// }

//!======================================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

// const timeoutId = setTimeout(() => {
//   console.log('Hello world');
// }, 1000);

// clearTimeout(timeoutId);

// const id = setTimeout(() => {}, 1000);
// clearTimeout(id);
