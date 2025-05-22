import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';
import { PAGE_SIZE } from './constants';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
  paganation: document.querySelector('.js-pagination'),
};

//!======================================================

let userValue;
let currentPage;
let maxPage;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  userValue = e.target.elements.query.value;
  currentPage = 1;

  const res = await getArticles(userValue, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.innerHTML = markup;
  maxPage = Math.ceil(res.totalResults / PAGE_SIZE);

  paganation.reset(res.totalResults);

  e.target.reset();
});
//!======================================================

// refs.paganation.addEventListener('click', async e => {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const page = Number(e.target.textContent);

//   const res = await getArticles(userValue, page);
//   const markup = articlesTemplate(res.articles);
//   refs.articleListElem.innerHTML = markup;
// });
//!======================================================

const paganation = new Pagination(refs.paganation, {
  totalItems: 0,
  itemsPerPage: PAGE_SIZE,
});

paganation.on('afterMove', async event => {
  const currentPage = event.page;

  const res = await getArticles(userValue, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.innerHTML = markup;
});
