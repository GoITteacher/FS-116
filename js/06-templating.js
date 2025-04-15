/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

// const titleEl = document.querySelector('.title');
// console.log(titleEl.innerHTML);
// console.log(titleEl.textContent);
// titleEl.textContent = '<i>Hello<i>';

//!======================================================
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

// const ulElem = document.querySelector('ul');

// const markup = options
//   .map(item => {
//     return `<li>Color - ${item.label}</li>`;
//   })
//   .join('\n');

// ulElem.innerHTML = markup;

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
//!======================================================

// function carTemplate(car) {}
// function carsTemplate(cars) {}

// function colorTemplate(color) {}
// function colorsTemplate(colors) {}

// function userTempalte(user) {}
// function usersTempalte(users) {}

//!======================================================

// function optionTemplate(option) {
//   return `<li class="user-item" style="color: ${option.color};">
//     <h2>Color - ${option.label}</h2>
// </li>`;
// }

// function optionsTemplate(options) {
//   return options.map(optionTemplate).join('\n');
// }

// const markup = optionsTemplate(options);

// const ulElem = document.querySelector('ul');

// ulElem.insertAdjacentHTML('beforeend', markup);

// console.log(markup);
