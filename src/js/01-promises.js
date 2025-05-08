/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */
//!======================================================
// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const random = Math.random(); // 0 - 1
//     if (random > 0.5) {
//       res('Смачного');
//     } else {
//       rej('Вибачте');
//     }
//   }, 300);
// });

//!======================================================

// promise
//   .then(message => {
//     console.log(message);
//     console.log('❇️Ням ням');
//   })
//   .catch(err => {
//     console.log(err);
//     console.log('🛑Поверніть гроші');
//   })
//   .finally(() => {
//     console.log('close');
//     console.log('close');
//     console.log('close');
//     console.log('close');
//     console.log('close');
//   });

// function foo() {}

// document.addEventListener('click', e => {});
//!======================================================

// function onFulfilled() {
//   console.log('Ням ням ням');
// }

// function onRejected() {
//   console.log('Ням ням ням');
// }

// promise.then(onFulfilled, onRejected);

//!======================================================

// promise
//   .then(() => {
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//   })
//   .catch(() => {
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//     console.log('1');
//   });

//!======================================================
// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const random = Math.random(); // 0 - 1
//     if (random > 0.5) {
//       res(`❇️${random}`);
//     } else {
//       rej(`🛑${random}`);
//     }
//   }, 100);
// });

// promise
//   .then(msg => {
//     console.log(msg);
//     return 1;
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(number => {
//     console.log(number);
//     return 2;
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(x1 => {
//     console.log(x1);
//   })
//   .catch(err => {
//     console.log(err);
//   });
