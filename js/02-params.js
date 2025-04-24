/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js - ${obj.skills.js}`,
//   );
// }

// function getUserName(obj) {
//   const {
//     username,
//     skills: { css, html, js },
//     skills: mySuperSkills,
//   } = obj;

//   console.log(username);
// }

// function getUserName({username, ...user}) {

//   console.log(username);
// }

// getUserName(user);

//!======================================================

// function productTemplate({ name = 123, amount = 123, price }) {
//   return `<li>${name} ${price} ${amount}</li>`;
// }

//!======================================================

// const obj = {
//   _id: '123234534512312',
//   title: 'awdawd',
//   price: '12234234',
//   password: '3435235',
// };

// const { _id, password, ...info } = obj;

// console.log(info);

// const arr = [1,3,5,6,1,2,4,6]

// const [firstElem, ...numbers] = arr;
