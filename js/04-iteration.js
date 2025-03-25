/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const i in feedback) {
//   totalFeedback += feedback[i];
// }

// console.log('totalFeedback: ', totalFeedback);

//!======================================================

// const a = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const b = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   hello: 'world',
//   test: true,
//   __proto__: a,
// };

// for (const key in b) {
//   console.log(key);
// }

//!======================================================

// const a = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const b = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   hello: 'world',
//   test: true,
//   __proto__: a,
// };

// const keys = Object.keys(b);
// for (const key of keys) {
//   console.log(key, b[key]);
// }

//!======================================================

// const values = Object.values(a);

// for (const value of values) {
// }

//!======================================================
/**
 * ---------------------------------
 */
// const keys = feedback;
// console.log(keys);

// // console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);
