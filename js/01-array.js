/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
//!======================================================

// const toys = [
//   { title: 'SpiderMan', price: 150, color: 'Red' },
//   { title: 'Batman', price: 110, color: 'Black' },
//   { title: 'Car', price: 750, color: 'blue' },
//   { title: 'Барбі', price: 550, color: 'blue' },
// ];

// for (const toy of toys) {
//   console.log(toy.title, toy.price);
// }

//!======================================================

// const toys = [
//   { title: 'SpiderMan', price: 150, rating: 10 },
//   { title: 'Batman', price: 110, rating: 10 },
//   { title: 'Car', price: 750, rating: 10 },
//   { title: 'Барбі', price: 550, rating: 10 },
// ];

// const result = [];

// for (const item of toys) {
//   result.push(item.price);
// }

// console.log(result);

//!======================================================

const users = [
  { fullname: 'Vlad', phoneNumber: '', city: 'Kyiv' },
  { fullname: 'Lorik', phoneNumber: '', city: 'Lviv' },
  { fullname: 'Svitlana', phoneNumber: '', city: 'Dnipro' },
  { fullname: 'Marina', phoneNumber: '', city: 'Kyiv' },
  { fullname: 'Nastya', phoneNumber: '', city: 'Lviv' },
  { fullname: 'Eleonora', phoneNumber: '', city: 'Dnipro' },
];

// const result = [];

// for (const user of users) {
//   if (user.city === 'Dnipro') {
//     result.push(user);
//   }
// }

// let result;
// for (const user of users) {
//   if (user.city === 'Dnipro') {
//      user.discount = 10;
//     result = user;
//   }
// }

// console.log(result);

//!======================================================
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/**
 * Отримуємо імена всіх лрузів
 */
// function getAllNames(allFriends) {
//   const res = [];

//   for (const item of allFriends) {
//     res.push(item.name);
//   }

//   return res;
// }

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const res = [];

  for (const item of allFriends) {
    if (item.online === true) {
      res.push(item.name);
    }
  }

  return res;
}

console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Щебінь'));
