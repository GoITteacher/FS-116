/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//   { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
//   { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
//   { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
//   { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
//   { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
//   { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
//   { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
// ];
//!======================================================
// const res = allCars.map(car => {
//   return car.model;
// });
//!======================================================
// const res = allCars.map(elem => {
//   const copy = {
//     model: elem.model,
//     price: elem.price,
//   };
//   return copy;
// });
//!======================================================

// const res = allCars.map(car => {
//   const copy = { ...car };
//   copy.price *= 0.9;
//   return copy;
// });

// console.table(allCars);
// console.table(res);

//!======================================================

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

// const models = allCars.map(car => {
//   return `Model: ${car.model}`;
// });
// const result = models.join('\n');
// console.log(result);

//!======================================================

// const liItems = allCars.map(car => {
//   return `<li>Model: ${car.model}; Price: ${car.price}</li>`;
// });

// const res = liItems.join('\n');

// console.log(res);

//!======================================================

// const arr = [1, [2, 3], [4, [[[5]]], 6], [7, 8], 9];

// const res = arr.flat(1);

// console.log(res);

//!======================================================

// const arr = [
//   { name: 'Vasya1', friends: ['Friend1', 'Friend2', 'Friend3'] },
//   { name: 'Vasya1', friends: ['Friend4', 'Friend5', 'Friend6'] },
//   { name: 'Vasya1', friends: ['Friend7', 'Friend8', 'Friend9'] },
// ];

// const friends = arr.flatMap(elem => elem.friends);

// console.log(friends);

//!======================================================
