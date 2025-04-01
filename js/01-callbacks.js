/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!======================================================

// function x() {}

// function test(userValue) {
//   // userValue = function(){};
//   userValue
// }

// test(x);

//!======================================================
// function x() {}

// function foo(test1, test2) {
//   test1();
//   test2();
// }

// foo(x, x);

//!======================================================

// function myDay(breakfast, instruction) {
//   console.log('Прокинутись');
//   console.log('Піти до школи');
//   console.log(`eat ${breakfast}`);
//   console.log('Повернутись зі школи');
//   instruction();
//   console.log('Лягти спати');
// }

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('Повернутись з муз школи');
// }

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('Повернутись з школи танців');
// }

// function goToShopping() {
//   console.log('Піти до магазину');
//   console.log('Повернутись з магазину');
// }

// myDay('apple', goToMusicSchool);
// myDay('apple', goToMusicSchool);
// myDay('apple', goToMusicSchool);
// myDay('apple', goToDanceSchool);

//!======================================================

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('Повернутись з муз школи');
// }

// document.addEventListener('click', goToMusicSchool);

//!======================================================

/**
 * Функція calc(a, b, callback)
 */

// function sum(x1, x2) {
//   return x1 + x2;
// }

// function diff(x1, x2) {
//   return x1 - x2;
// }

// function getValue(value, percent) {
//   return (value / 100) * percent;
// }

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(20, 13, getValue);
// calc(6, 50, getValue);
// calc(5, 25, getValue);

// 500 10
//!======================================================
// /**
//  * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
//  * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
//  * each повинна повернути новий масив, елементами якого будуть
//  * результати виклику коллбека.
//  */

// function showItem(item) {
//   console.log(`ITEM - ${item}`);
// }

// function multipleItem(item) {
//   return item * item;
// }

// function each(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const res = callback(array[i]);
//     newArray.push(res);
//   }

//   return newArray;
// }

// console.log(each([1, 2, 3], multipleItem));

// console.log(each([1, 2, 3], showItem));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

//!======================================================

// function foo(callback1, callback2) {
//   callback1();
//   callback2();
// }

// function x() {
//   console.log('Hello world');
// }

// function y() {
//   console.log('Hello world');
// }

// foo(x, y);

//!======================================================

// foo(
//   function () {
//     console.log('Hello world');
//   },
//   function () {
//     console.log('Hello world');
//   },
// );
