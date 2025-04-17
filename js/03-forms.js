/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector('.js-form');
const ulElem = document.querySelector('.js-list');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    userPassword: e.target.elements.password.value,
    userEmail: e.target.elements.email.value,
    userComment: e.target.elements.comment.value,
  };

  const markup = commentTemplate(data);

  ulElem.insertAdjacentHTML('afterbegin', markup);

  e.target.reset();
});

function commentTemplate(userData) {
  return `<li>
        <p>${userData.userEmail} - ${userData.userPassword}</p>
        <p>${userData.userComment}</p>
      </li>`;
}
