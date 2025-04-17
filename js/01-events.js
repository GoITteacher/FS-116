/**
 * Подія сlick
 *
 * - addEventListener
 * - removeEventListener
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const btnElem = document.querySelector('.js-click');

// function sayHello() {
//   console.log('Hello world');
// }

/* 
    - onTargetEvent - onMagicBtnClick
    - handleTargetEvent - handleBtnElemClick
    - targetEventHanlder - btnClickHadnler
*/

//!======================================================

// function handleBtnClick() {
//   console.log('Hello world');
// }

// btnElem.addEventListener('click', handleBtnClick);
// btnElem.removeEventListener('click', handleBtnClick);

//!======================================================

const btnElem = document.querySelector('.js-click');
const boxElem = document.querySelector('.js-box');

let x = 0;
let y = 0;
document.addEventListener('keydown', e => {
  switch (e.code) {
    case 'ArrowLeft':
      x -= 10;
      break;
    case 'ArrowRight':
      x += 10;
      break;
    case 'ArrowUp':
      y -= 10;
      break;
    case 'ArrowDown':
      y += 10;
      break;
  }

  boxElem.style.left = x + 'px';
  boxElem.style.top = y + 'px';
});

// btnElem.addEventListener('click', handleBtnClick);

// let posX = 100;
// let posY = 100;

// function handleBtnClick() {
//   posX += 10;
//   posY += 10;

//   boxElem.style.left = posX + 'px';
//   boxElem.style.top = posY + 'px';
// }

//!======================================================
