/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

function createPromise(value, isActive, delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (isActive) {
        res(value);
      } else {
        rej(value);
      }
    }, delay);
  });

  return promise;
}
//!======================================================

// for (let i = 0; i < 5; i++) {
//   const promise = createPromise(i, true, i * 1000);
//   promise
//     .then(msg => {
//       console.log(msg);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

//!======================================================

// const p1 = createPromise('Hello Promise 1', true, 2000);
// const p2 = createPromise('Hello Promise 2', true, 4000);
// const p3 = createPromise('Hello Promise 3', true, 1000);

// p1.then(msg => {
//   console.log(msg);
// }).catch(err => {
//   console.log(err);
// });

// p2.then(msg => {
//   console.log(msg);
// }).catch(err => {
//   console.log(err);
// });

// p3.then(msg => {
//   console.log(msg);
// }).catch(err => {
//   console.log(err);
// });

//!======================================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr() {
//   const arr = [1, 23, 5, 8, 6, 4, 3, 1];
//   const promise = Promise.resolve(arr);
//   return promise;
// }

// console.log(getArr());

// getArr().then(data => {
//   console.log(data);
// });

//!======================================================

// const rand = Math.round(Math.random() * 1000);
// const promise = createPromise(rand, true, 100);

// promise
//   .then(value => {
//     if (value % 2 === 0) {
//       console.log(value);
//     } else {
//       return Promise.reject(`Число ${value} не ділиться на два`);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!======================================================

/*
 * - Promise.all()
 * - Promise.allSettled()
 * - Promise.race()
 */

// const p1 = createPromise('p1', true, 3000);
// const p2 = createPromise('p2', false, 1000);
// const p3 = createPromise('p3', true, 4000);
// const p4 = createPromise('p4', false, 2000);

// const arr = [p1, p2, p3, p4];

// Promise.allSettled(arr)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!======================================================
