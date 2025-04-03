/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
//!======================================================
const allCars = [
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    price: 315,
    discount: 2,
    amount: 0,
  },
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    price: 240,
    discount: 4,
    amount: 5,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    price: 455,
    discount: 6,
    amount: 0,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    price: 224,
    discount: 5,
    amount: 5,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    price: 241,
    discount: 9,
    amount: 5,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    price: 243,
    discount: 2,
    amount: 0,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    price: 271,
    discount: 1,
    amount: 0,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    price: 342,
    discount: 1,
    amount: 0,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    price: 221,
    discount: 2,
    amount: 0,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    price: 316,
    discount: 6,
    amount: 0,
  },
];

// const copy = allCars.toSorted((a, b) => {
//   return a.model.localeCompare(b.model);
// });

// console.table(copy);

//!======================================================
// const copy = allCars.toSorted((car1, car2) => {
//   return car1.price - car2.price;
// });

// const copy = allCars.toSorted((a, b) => {
//   return a.model.length - b.model.length;
// });

// console.table(copy);
//!======================================================
// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers;
// console.log('sorted ', sorted);

// const letters = ['b', 'B', 'a', 'A'];
// console.log('letters', letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   }),
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!======================================================

// const x1 = 'A'; //66
// const x2 = 'A'; //67

// const res = 'Hello'.localeCompare('World');

// console.log(res);
