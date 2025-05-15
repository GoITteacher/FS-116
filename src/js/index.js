// function getBooks() {
//   const baseUrl = '';
//   const endPoint = '';
//   const url = '';
//   const params = new URLSearchParams({});
//   const headers = {};

//   return fetch(url, { params, headers }).then(res => res.json());
// }

// function getBooks() {
//   const baseUrl = '';
//   const endPoint = '';
//   const params = new URLSearchParams({});
//   const url = `?${params}`;

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const options = {
//     method: 'PATCH',
//     headers,
//     body: JSON.stringify(data),
//   };

//   return fetch(url).then(res => res.json());
// }

//!======================================================

// import axios from 'axios';

// const axios2 = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: { Hello: 'World' },
//   params: { apiKey: 'HEllo world' },
// });

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers['aw'] = 'hello world';
// axios.defaults.params = {};

// function getBooks() {
//   return axios2.get('/books');
// }

// function createBook(newBook) {
//   return axios2.post('/books', newBook);
// }
// function updateBook(newBook) {
//   return axios2.post('/books', newBook);
// }
// function resetBook(newBook) {
//   return axios2.post('/books', newBook);
// }

// createBook({ title: 'Hello world' });
