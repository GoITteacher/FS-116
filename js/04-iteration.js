/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

//!======================================================
// const prices = [100, 521, 315, 1, 4, 6, 6, 12, 1, 1];

// function getSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// console.log(getSum([1, 2, 4, 5, 6, 67]));
// console.log(getSum([3, 2, 4, 7, 8, 3]));

// for (let i = 0; i < prices.length / 2; i += 2) {
//   const element = prices[i];
//   console.log(element);
// }

//!======================================================

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }

// console.table(friends);

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }
//!======================================================

// const arr = [1, 3, 6, 7, 23, 5, 7, 8, 3, 3, 1, 24, 6, 5, 2, 1, 2, 3];

// const indexes = [];// [1,3, ]

// for (const number of arr) {
//   if (number %2 !== 0) {
//     indexes.push(number);
//   }
// }

// console.log(indexes);

//!======================================================

// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
// }

// console.log(arr);

//!======================================================
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = '8 11';

// const numbers = values.split(' ');

// const area = numbers[0] * numbers[1];

// console.log(area);
//!======================================================
/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i++) {
//   const elem = fruits[i];
//   const message = `${i + 1}: ${elem}`;
//   console.log(message);
// }

//!======================================================
