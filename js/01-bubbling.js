/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// parent.addEventListener('click', e => {
//   console.log('Varus');
// });

// child.addEventListener('click', e => {
//   console.log('ATB');
//   e.stopPropagation();
// });

// innerChild.addEventListener('click', e => {
//   console.log('SILPO1');
// });

// innerChild.addEventListener('click', e => {
//   console.log('SILPO2');
//   e.stopImmediatePropagation();
// });

// innerChild.addEventListener('click', e => {
//   console.log('SILPO3');
// });
