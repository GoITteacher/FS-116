/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

// const userNameElem = document.querySelector('.js-user-name');

// userNameElem.addEventListener('input', handleUserNameInput);

// function handleUserNameInput(e) {
//   const userValue = e.target.value;

//   if (userValue.includes('SOS')) {
//     userNameElem.classList.remove('valid');
//     userNameElem.classList.add('invalid');
//   } else {
//     userNameElem.classList.add('valid');
//     userNameElem.classList.remove('invalid');
//   }
// }

//!======================================================

// const colorElem = document.querySelector('.js-user-color');

// colorElem.addEventListener('input', handleColorChange);

// function handleColorChange(e) {
//   const color = e.target.value;
//   document.body.style.backgroundColor = color;
// }

//!======================================================

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// const userNameElem = document.querySelector('.js-user-name');

// userNameElem.addEventListener('focus', () => {
//   console.log('Введіть ваше імя');
// });

// userNameElem.addEventListener('blur', e => {
//   const name = e.target.value;
//   if (name) {
//     console.log(`Hello ${name}`);
//   }
// });
