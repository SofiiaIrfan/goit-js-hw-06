import users from './users.js'; //eslint-disable-line

/*
Получить массив имен всех пользователей (поле name)
*/
const getUserNames = function(arr) {
  return arr.map(user => user.name);
};

console.log(getUserNames(users));