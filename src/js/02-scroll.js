import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';
import { PAGE_SIZE } from './constants';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
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

  updateObserverStatus();

  e.target.reset();
});
//!======================================================

async function loadMore() {
  currentPage += 1;
  updateObserverStatus();

  const res = await getArticles(userValue, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}

function handleObserver(entries) {
  const entry = entries[0];

  if (entry.isIntersecting) {
    console.log('Зявився');
    loadMore();
  }
}

const observer = new IntersectionObserver(handleObserver, {
  rootMargin: '1000px',
  threshold: 0,
});

function updateObserverStatus() {
  if (currentPage < maxPage) {
    console.log('Додали observer');
    observer.observe(refs.targetElem);
  } else {
    console.log('Видалили observer');
    observer.unobserve(refs.targetElem);
  }
}
//!======================================================
