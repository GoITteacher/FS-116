/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

//!======================================================
// const userMail = 'hello-world@gmail.com';
// const copyStr = userMail.slice(3, 10);
// const copyStr = userMail.slice(21);
// const copyStr = userMail.slice(-5, -1);
// const copyStr = userMail.slice(0);

// console.log(copyStr);
//!======================================================

// const userMail = 'MYSUPEPoshta';
// const copy = userMail.toLowerCase();
// const copy = userMail.toUpperCase();
// console.log(userMail, copy);

//!======================================================

// includes

// const message = 'Hello my sup$er friend Trump';

// const hasTrump = message.includes(' ');
// const hasHello = message.includes('@');
// const hasBanWord = hasTrump || hasHello;

// if (hasBanWord) {
//   console.log('Вийди звідси розбійник');
// } else {
//     console.log();

// }

// if(message.includes(' ') || message.includes('@')){

// }
//!======================================================

// const userMail = 'test-mail@gmail.ru';
// const hasMailRu = userMail.endsWith(' ');

// console.log(hasMailRu);

// if (hasMailRu) {
//   console.log('Іди звідси');
// }

// let userPhoneNumber = '996195234';
// const isValidPhoneNumber = userPhoneNumber.startsWith('+380');
// if (!isValidPhoneNumber) {
//   userPhoneNumber = '+380' + userPhoneNumber;
// }
// console.log(userPhoneNumber);

//!======================================================

// const username = 'Eleonora Mercer';

// const spaceIndex = username.indexOf(' ');

// console.log(spaceIndex);

// const firstname = username.slice(0, spaceIndex);
// const secondname = username.slice(spaceIndex).trim();

// console.log(secondname);

//!======================================================

// const str = 'Hello  world';

// const copy = str.replace('       ', ' ');

// console.log(copy);
