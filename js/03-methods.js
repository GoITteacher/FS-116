/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - splice
 * - concat
 * - indexOf
 * - push/pop
 */

//!======================================================
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']; // => 'awdawdawdawdawdawdawd'

// console.log(courses);

// const res = courses.join('-HELLO-');

// console.log(res);

//!======================================================

// const str = 'Hello world test words';

// const arr = str.split(' '); // => ['', '','']

// console.log(arr.length);

//!======================================================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const copy = arr.slice();
// const copy = arr.slice(5, -1);

// console.log(copy);

//!======================================================

// const arr = [1, 2, 3, 4, 5, 67, 2, 23, 456, 8, 4];

// arr.splice(1, 9, 'Staart', 'Hello', 'END');

// console.log(arr);

//!======================================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const res = [].concat(arr1, arr2, arr3);

// console.log(res);

//!======================================================

// const arr = [1, 2, 33, 21, 5, 6, 7, 2, 1, 4, 6, 7];

// const index = arr.lastIndexOf(999);

// console.log(index);

// arr[index] = 'Hello';

// console.log(arr);

//!======================================================

// const friends = ['Roman', 'Mila', 'Valera'];

// const user = 'Mila';

// const isValidUser = friends.includes(user);

// if (isValidUser) {
//   console.log('Hello');
// } else {
//   console.log('Вас немає у списку');
// }

//!======================================================

// const arr = [1, 4, 56, 12, 3, 6, 7];

// arr.push(1)

// for(let i =0;i<3;i++){
//     arr.pop()
// }
