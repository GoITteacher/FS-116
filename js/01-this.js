/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//!======================================================

// function foo() {
//   // const this =
//   console.log('Hello world');
// }

// foo();

//!======================================================

/**
 * Глобальний контекст
 */

// this = window undefined

// function ajweydfgajwd() {
//   // const this = window;
//   console.log('hello this', this);
// }

// foo();

//
//!======================================================
/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// user.showTag();

// const user = {
//   name: 'Vasya',
//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// user.showName();

//!======================================================

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

// function showTag() {
//   console.log('showTag -> this', this);
//   // console.log('showTag -> this.tag', this.tag);
// }

// showTag();

// const mango = {
//   tag: 'Mango',
//   showUserThis: showTag,
// };
// const test1 = {
//   tag: 'Kiwi',
//   showUserThis: showTag,
// };

// mango.showUserThis();

// test1.showUserThis();

// mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();
//!======================================================
/**
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag -> this', this);
//     // console.log('showTag -> this.tag', this.tag);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();
//!======================================================
/**
 * Контекст в callback-функциях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// function invokeAction(callback) {
//   callback();
// }

// invokeAction(jacob.showTag);

//!======================================================

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };

// function invokeAction(callback) {
//   const user = {
//     name: 'Vasya',
//     test: callback,
//   };

//   user.test();
// }

// invokeAction(jacob.showTag);

//!======================================================
//? ARROW FUNCTION

// function foo() {
//   // this = user

//   const test = () => {
//     console.log(this);
//   };

//   test();
// }

// const user = {
//   name: 'vasya',
//   test: foo,
// };

// user.test();

//!======================================================

/* 
1. визначити тип функції
- якщо це звичайна - шукаємо де викликається і дивимось хто викликає
- якщо це стрілчата - шукаємо де вона створюється і дивимось батьківський контекст
*/

// function foo() {
//   //this = undefined
//   const arr = () => {
//     //this = undefined
//     const arr1 = () => {
//       //this = undefined
//       const arr2 = () => {
//         //this = undefined
//         console.log(this);
//       };
//       arr2();
//     };
//     arr1();
//   };
//   arr();
// }

// foo();
