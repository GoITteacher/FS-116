/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!======================================================

// const showThis = function (a, b) {
//   //this = objA
//   // console.log(a, b);
//   console.log('showThis -> this', this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20);
// showThis.call(window, 25, 45);
// showThis.call({}, 'hello');
// showThis.call(10);
//!======================================================

// function foo(r, g, b) {
//   console.log(r, g, b, 'this:', this);
// }

// const user1 = { name: 'User1' };
// const user2 = { name: 'User2' };
// const user3 = { name: 'User3' };
// const user4 = { name: 'User4' };

// const red = 10;
// const green = 20;
// const blue = 30;
// foo.call(user1, red, green, blue);

// const rgb = [10, 20, 30];
// foo.apply(user1, rgb);

//!======================================================

// const user = {
//   name: 'Vasya',
//   showName() {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: 'Roman',
// };

// user.showName.call(user2);

//!======================================================

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//!======================================================
// const user = {
//   name: 'Roman',
//   cookingFood() {
//     console.log('author', this?.name);
//   },
// };

// user.cookingFood();

// const user2 = {
//   name: 'Vova',
//   cookingFood: user.cookingFood,
// };

// const copy = user2.cookingFood.bind(user2);

// copy();
// copy.call(user);

// const copy2 = copy.bind(user);

//!======================================================

// 11 - arrow function
// 9 - bind
// 7 - call apply
// 5 - obj
// 2 - window

// const fun = ()=>{}

// const foo = fun.bind(user3)

// user.foo.call(user2);

//!======================================================
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

//!======================================================
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);
