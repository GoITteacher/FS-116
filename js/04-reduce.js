/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
//!======================================================

// const arr = [7, 2, 5, 4];

// const res = arr.reduce((acc, elem) => {
//   return acc + elem;
// }, 0);

// console.log(res);

//!======================================================
// const arr = [7, 2, 5, 4, 3, 6, 2, 3, 7, 7];

// const res = arr.reduce((acc, elem) => {
//   acc += `<li>${elem}</li>\n`;
//   return acc;
// }, '');

// console.log(res);

//!======================================================
// const res = arr.reduce((acc, elem) => {
//   if (elem % 2 == 0) {
//     acc.push(elem * 2);
//   }
//   return acc;
// }, []);

// console.log(res);

//!======================================================
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers;
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = salary;
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
//!======================================================

// function test() {
//   const res = players.reduce((acc, player) => {
//     acc.push(player.name);
//     return acc;
//   }, []);

//   return res;
// }

// console.log(test());

//!======================================================

// const totalTimePlayed = players;
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart;
// console.log(totalAmount);
