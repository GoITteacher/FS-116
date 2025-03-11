/**
 * Оператор switch
 */

const username = 'test';
//!======================================================

// switch (username) {
//   case 'Mango':
//     console.log('hello MANGO');
//     break;

//   case 'Poly':
//     console.log('hello POLY');
//     break;

//   default:
//     console.log('Hello anonym');
// }

//!======================================================

// if (price === 0) {
// } else if (price === 100) {
// } else if (price === 1000) {
// }

// switch (price) {
//   case 100:
//     {
//     }
//     break;

//   case 1000:
//     console.log(10 * 10);
//     lety;
//     break;

//   case 1001:
//     break;

//   case 1002:
//     break;

//   case 1003:
//     break;
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else {
//   console.log('Date in the future');
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Today');
//     break;

//   case 1:
//     console.log('Tomorrow');
//     break;
//   case 2:
//     console.log('Day after');
//     break;

//   default:
//     console.log('Date in the future');
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 1;
let message = '';

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;
  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;
  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;
  default:
    message = 'Вам перезвонит менеджер';
}
console.log(message);
