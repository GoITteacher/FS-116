import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  resetUser,
} from './modules/usersAPI.js';

//!======================================================

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};

//!======================================================

refs.createUserForm.addEventListener('submit', handleUserCreate);
refs.updateUserForm.addEventListener('submit', handleUserUpdate);
refs.resetUserForm.addEventListener('submit', handleUserReset);
refs.userListElem.addEventListener('click', handleUserRemove);

function handleUserCreate(e) {
  e.preventDefault();

  const user = {
    name: e.target.elements.userName.value,
    email: e.target.elements.userEmail.value,
    phone: e.target.elements.userPhone.value,
  };

  createUser(user).then(newUser => {
    const markup = userTemplate(newUser);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function handleUserUpdate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const info = {};

  formData.forEach((value, key) => {
    if (value) {
      info[key] = value;
    }
  });
  const id = info.id;

  if (!id) {
    console.log('Error');
    return;
  }

  updateUser(id, info).then(user => {
    const oldElem = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(user);
    oldElem.insertAdjacentHTML('afterend', markup);
    oldElem.remove();
  });

  e.target.reset();
}

function handleUserReset(e) {
  e.preventDefault();

  const id = e.target.elements.userId.value;

  const user = {
    name: e.target.elements.userName.value,
    email: e.target.elements.userEmail.value,
    phone: e.target.elements.userPhone.value,
  };

  resetUser(id, user).then(user => {
    const oldElem = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(user);
    oldElem.insertAdjacentHTML('afterend', markup);
    oldElem.remove();
  });

  e.target.reset();
}

function handleUserRemove(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const liElem = e.target.closest('li');
  const id = liElem.dataset.id;

  deleteUser(id).then(() => {
    const oldElem = document.querySelector(`[data-id="${id}"]`);
    oldElem.remove();
  });
}

//!======================================================
getUsers().then(users => {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
});

//!======================================================

function userTemplate({ id, name, img, email, phone }) {
  return `<li class="card user-item" data-id="${id}">
  <img
    src="https://picsum.photos/1280/720?random=${id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${phone}</p>
  <p>Email: ${email}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n\n\n\n');
}

//!======================================================
