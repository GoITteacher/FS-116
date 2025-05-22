import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';
import { PAGE_SIZE } from './constants';

//!======================================================
const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};

let userValue = 'Bitcoin';
let currentPage = 0;
let maxPage = 0;

//!======================================================

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  userValue = e.target.elements.query.value; // 'Bitcoin'
  currentPage = 1;

  showLoader();
  const res = await getArticles(userValue, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.innerHTML = markup;
  maxPage = Math.ceil(res.totalResults / PAGE_SIZE);

  updateBtnStatus();
  articlesNotification();

  hideLoader();
  e.target.reset();
});

refs.btnLoadMore.addEventListener('click', async e => {
  currentPage += 1;

  updateBtnStatus();
  articlesNotification();
  showLoader();

  const res = await getArticles(userValue, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);

  hideLoader();
});

//!======================================================

function showLoadBtn() {
  console.log('Показати кнопку');
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadBtn() {
  console.log('Приховати кнопку');
  refs.btnLoadMore.classList.add('hidden');
}

function updateBtnStatus() {
  if (currentPage < maxPage) {
    showLoadBtn();
  } else {
    hideLoadBtn();
  }
}

//!======================================================

function articlesNotification() {
  if (currentPage === 1 && currentPage < maxPage) {
    iziToast.info({
      message: `Було знайдено ${maxPage} сторінок`,
    });
  }

  if (currentPage === maxPage) {
    iziToast.info({
      message: `Ви завантажили всі данні`,
    });
  }

  if (maxPage === 0) {
    iziToast.error({
      message: `По вашому запиту нічого не знайдено!`,
    });
  }
}

//!======================================================

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}
function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
