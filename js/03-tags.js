let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

// refs.firstTagsList.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   const liElem = e.target.closest('.tag-item');
//   liElem.classList.toggle('active');
// });

// refs.secondTagsList.addEventListener('click', e => {
//   const liElem = e.target.closest('.tag-item');
//   if (!liElem) return;

//   const oldActiveElem = refs.secondTagsList.querySelector('.active');
//   oldActiveElem?.classList.remove('active');

//   console.log(oldActiveElem);
//   console.log(liElem);

//   liElem.classList.add('active');
// });
