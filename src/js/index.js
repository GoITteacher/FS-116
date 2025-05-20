import axios from 'axios';

function getNews() {
  const baseUrl = 'https://newsapi.org/v2';
  const endPoint = '/top-headlines';
  const url = baseUrl + endPoint;

  const params = {
    pageSize: 10,
    category: 'technology',
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  return axios.get(url, { params, headers }).then(res => res.data);
}
//!======================================================
function initPage() {
  console.log(1);

  getNews()
    .then(data => {
      console.log(data);
      console.log(2);
    })
    .then(() => {
      getNews()
        .then(data => {
          console.log(data);
          console.log(3);
        })
        .then(() => {
          console.log('3_1');
        });
    });

  console.log(5);
}

// initPage();
//!======================================================

// async function test() {
//   console.log(1);

//   await getNews();

//   console.log(2);

//   await getNews();

//   console.log(3);
// }

// test();

//!======================================================

// async function foo() {

// }

// async () => {};

// const obj = {
//   async showInfo() {},
// };

// class User {
//   async init() {}
// }

// [].map(async () => {});

// document.addEventListener(async () => {});

//!======================================================

// async function initPage() {
//   console.log(1);

//   try {
//     await getNews();
//     console.log(2);

//     await getNews();

//     console.log(3);

//     console.log('3_1');

//     console.log(5);
//   } catch {}
// }

//!======================================================

// async function getUser(id) {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;

//   const res = await axios.get(url);
//   return res.data;
// }

// async function getUsers() {
//   const promises = [];

//   for (let i = 1; i <= 10; i++) {
//     const promise = getUser(i);
//     promises.push(promise);
//   }

//   const res = await Promise.all(promises);
//   console.log(res);
// }

// getUsers();
