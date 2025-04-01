/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */
//!======================================================

// function name(a, b) {
//   return a + b;
// }

// const name = (a, b) => a + b;

//!======================================================

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));
//!======================================================
// function fnA() {
//   return {
//     a: 5,
//   };
// }

// console.log(fnA());

// const arrowFnA = () => ({
//   a: 10,
// });

// console.log(arrowFnA());

//!======================================================

// const arr = (a,b,c) => {}

// const arr = b => b * 2;

// const x = () => {}
// const x = (x1,x2) => {}

//!======================================================

// const showItems = (...args) => {
//   console.log(args);
// };

// showItems(1, 2, 2, 3, 4, 5);

//!======================================================

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

// calc(2, 3, function (x, y) {
//   return x + y;
// // });

// calc(2, 3, (x, y) => x + y);

// calc(10, 8, function (x, y) {
//   return x - y;
// });

// calc(10, 8, (x, y) => {
//   console.log('Hello world');
// });

// calc(1, 2, (a, b) => {
//   if (a % 2 === 0) {
//     console.log(a + b);
//   } else {
//     console.log(a - b);
//   }
// });
