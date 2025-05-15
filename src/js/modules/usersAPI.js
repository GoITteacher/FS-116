import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
});

export function getUsers() {
  return axios.get('/users').then(res => res.data);
}
export function createUser(newUser) {
  return axios.post('/users', newUser).then(res => res.data);
}
export function updateUser(id, user) {
  return axios.patch(`/users/${id}`, user).then(res => res.data);
}
export function resetUser(id, user) {
  return axios.put(`/users/${id}`, user).then(res => res.data);
}
export function deleteUser(id) {
  return axios.delete(`/users/${id}`).then(res => res.data);
}
