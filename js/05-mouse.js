/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
const childBox = boxRef.firstElementChild;

// boxRef.addEventListener('mouseenter', e => {
//   e.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', e => {
//   e.target.classList.remove('box--active');
// });

//!======================================================

// const btnElem = document.querySelector('.js-btn');

// btnElem.style.position = 'absolute';

// btnElem.addEventListener('mouseenter', () => {
//   const x = Math.round(Math.random() * 700);
//   const y = Math.round(Math.random() * 400);
//   btnElem.style.left = x + 'px';
//   btnElem.style.top = y + 'px';
// });

//!======================================================

// childBox.style.position = 'absolute';
// boxRef.addEventListener('mousemove', e => {
//   const x = e.pageX - 150;
//   const y = e.pageY - 150;

//   childBox.style.left = x + 'px';
//   childBox.style.top = y + 'px';
// });
