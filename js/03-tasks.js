/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// function timeToStr(hours, minutes) {
//   if (minutes === 0) {
//     return `${hours} г.`;
//   } else {
//     return `${hours} г. ${minutes} хв.`;
//   }
// }

/* function timeToStr(hours, minutes) {
  let result;
  
  if (minutes === 0) {
    result = `${hours} г.`;
  } else {
    result = `${hours} г. ${minutes} хв.`;
  }

  return result;
} */

// function timeToStr(hours, minutes) {
//   const result = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;
//   return result;
// }

// const msg1 = timeToStr(15, 26);
// const msg2 = timeToStr(12, 12);
// const msg3 = timeToStr(17, 11);
// const msg4 = timeToStr(13, 15);

// console.log(msg1);
// console.log(msg2);
// console.log(msg3);
// console.log(msg4);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log('Today');
} else if (daysUntilDeadline === 1) {
  console.log('Tomorrow');
} else if (daysUntilDeadline === 2) {
  console.log('Overmorrow');
} else {
  console.log('Date in the future');
}
