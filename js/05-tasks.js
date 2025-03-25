/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// for (const i of Object.keys(user)) {
//   console.log(`${i}: ${user[i]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const salary of Object.values(salaries)) {
  sum += salary;
}

// console.log('Sum:', sum);

//!======================================================

// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);

// Math.max();
// Math.min();
// const obj = {
//   name: 'awdawd',
// };

// apartment.owner.email;
// apartment.owner['email'];
// apartment['owner']['email']

// String;
// Number;
// Object.keys();
