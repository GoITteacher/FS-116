import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

// function searchHero(superhero) {
//   const BASE_URL = 'https://superhero-search.p.rapidapi.com';
//   const END_POINT = '/api/';
//   const params = new URLSearchParams({
//     hero: superhero,
//     age: 10,
//     city: 'Dnipro',
//   });
//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const headers = {
//     'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
//     'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
//   };

//   return fetch(url, { headers }).then(res => {
//     return res.json();
//   });
// }
