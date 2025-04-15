/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */
//!======================================================
// const btnEl = document.querySelector('button');
// const btnEl = document.querySelector('.js-magic-btn');
// const btnEl = document.querySelector('#js-magic-btn');
// console.log(btnEl);
//!======================================================

// const liElems = document.querySelectorAll('.js-product-list > li');
// console.log(liElems.length);

//!======================================================

// const ulElem = document.querySelector('.js-product-list');
// const liElems = ulElem.querySelectorAll('li');
// console.log(liElems);

//!======================================================
/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

/* 
parentElement
firstElementChild
lastElementChild
previousElementSibling
nextElementSibling
children
*/

// const btn = document.querySelector('.js-magic-btn');

// console.log(btn.parentElement.lastElementChild.previousElementSibling);
//!======================================================

// const ulElem = document.querySelector('ul');

// const secondElem = ulElem.children[1];

// console.log(ulElem.children);
// console.log(secondElem);
