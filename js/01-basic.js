/**
 * Деструктуризація об'єкта
 */
//!======================================================
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'test',
//   country: 'Ukraine',
//   balance: 0,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const age = user.age;
// const city = user.city;
// const country = user.country;

// const { age, city, country } = user;

// const { test } = user;
// const test = user.test
// console.log(test);

//!======================================================
const balance = 150;

const obj = {
  username: 'Jacob name',
  age: 25,
  city: 'test',
  country: 'Ukraine',
  balance: 0,
  name: 'Hello',
};

//!======================================================
// const { username: myName = 'ANONYM' } = obj;
// console.log(myName);

//!======================================================
// const { name = 'Anonym' } = obj;
// const name = obj.name || 'Anonym';
// console.log(name);

//!======================================================
// const { city, balance: test, country} = obj;
// const city = obj.city
// const country = obj.country
// const test = obj.balance
//!======================================================
/**
 * Глибока деструктуризація об'єкта
 */

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'test',
//   country: 'Ukraine',
//   balance: 0,
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { skills: {html, js,css} } = user;

// console.log(skills);

// const {html, js, css} = user.skills;

//!======================================================

const user = {
  address: {
    city: 'Dnipro',
    location: {
      x: '10',
      y: '20',
    },
  },
  name: 'Volodka',
};

// const {
//   address,
//   address: { city },
// } = user;

// const {
//   name,
//   address: {
//     city,
//     location: { x, y },
//   },
// } = user;

// console.log(name, city, x, y);

//!======================================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [red, green, blue] = arr;
// const rgb = [122, 12, 230, 0.2];
// const [, , blue, alpha = 1] = rgb;
// console.log(blue, alpha);
// const location = [10, 20];
// const [x, y] = location;

//!======================================================

// let x = 25;
// let y = 55;
// let q = 30;
// let t = 70;

// [x, y, q, t] = [t, t, x, y];

// console.log(x, y, q, t);

// const [x, y, t, q, r, e] = [25, 55, 30, 'Hello', true, null];
// console.log(x, y);

//!======================================================
