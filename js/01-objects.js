/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */
//!======================================================

// const nameList = ['Name1', 'Name2', 'Name3'];

// console.log(nameList[2]);

//!======================================================

// const student = ['Vasya', 'Prokopenko', 21, 17, 25, 100, 'Dnipro'];

// console.log(student[3]);

//!======================================================

// const phoneInfo = {
//   price: 1000,
//   model: 'Iphone 13',
//   diagonal: 5.5,
//   color: 'Grey',
//   os: 'IOS',
//   camera: 14,
//   value: false,
//   friends: ['aawd', 'awdaw'],
//   address: {},
// };

const student = {
  firstname: 'Vasya',
  lastname: 'Prokopenko',
  age: 21,
  address: {
    country: 'Ukraine',
    city: 'Dnipro',
  },
};

// console.log(student.firstname);
// console.log(student.age);
// console.log(student.address.city);

// console.log(student.city);

// const message = {
//   update_id: 937090861,
//   message: {
//     message_id: 1941682,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//       is_premium: true,
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Volodymyr',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1742926189,
//     text: 'test',
//   },
// };

// console.log(message.message.from.first_name);
// console.log(message.message.from.first_name);

// const messageFrom = message.message.from;
// const first_name = messageFrom.first_name;
// const first_name = messageFrom.username;
// const first_name = messageFrom.language_code;

//!======================================================

const playlist = {
  rating: 5,
  name: 'My amazing playlist',
  isFavourite: true,
  tracks: ['track-1', 'track-2', 'track-3'],

  userKey: 'Hello world',
};

// const userKey = prompt('Enter key'); // 'name'
// console.log(playlist['rating']);

// playlist.name; //'My amazing playlist'

// const mySuperKey = 'rating';
// console.log(playlist[mySuperKey]);
// console.log(playlist['name']);
// console.log(playlist['isFavourite']);

//!======================================================
// const propertyName = 'tracks';
// playlist.name = 'New Name';
// playlist['rating'] = 100;
// playlist['rating'] += 10;
// playlist.tracks.push('NEW Track');

// playlist.price = 125;

// console.log(playlist);
/**
 * -----------------------------------
 */
// function foo(values) {
//   console.log(values);
//   console.log(values.a);
//   console.log(values.b);
// }
