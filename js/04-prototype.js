/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */
//!======================================================

// const user = {
//   filter() {},
// };

// console.log(user);

// const arr = [10, 20, 30];
// console.log(arr);

// arr.filter();

//!======================================================
// const arr = [];

// console.log(arr);

//!======================================================
// const baseObj = {
//   name: 'Vasya',
// };

// const obj = {
//   x: 10,
//   y: 20,
//   __proto__: baseObj,
// };

// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.name);

//!======================================================

// const baseUser = {
//   name: 'Prototype',

//   showName() {
//     console.log(this.name);
//   },

//   showAge() {
//     console.log(this.age);
//   },
// };

// const arr = [1, 2, 3];
// // arr.filter();
// console.log(arr);

// arr.filter()

// const user1 = {
//   name: 'Vasya',
//   age: 25,

// };

// const user2 = {
//   name: 'Roman',
//   age: 25,
// };

// const user3 = {
//   name: 'Tomila',
//   age: 25,
// };

// const newUser = Object.create(baseUser);

// newUser.name = 'Vasya';

// console.log(newUser);

// user1.showName();
// user2.showName();
// user3.showName();

//!======================================================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

/**
 * ----------------------------------------
 */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

//!======================================================

// const baseObj = {
//   a1: 10,
//   a2: 20,
//   a3: 30,
//   a4: 40,
// };

// const copy = Object.create(baseObj);

// copy.x1 = 10;
// copy.x2 = 10;
// copy.x3 = 10;
// copy.x4 = 10;

// for (const key in copy) {
//   if (copy.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//!======================================================

// // 1,22,4,21,3,28;
// // 1,4,3,22,21,28;
// 1,3,4,21,22,28

//!======================================================

// const str = 'awdawd';

//!======================================================

// function createCalc() {
//   let name = 'Vova';

//   function calc(x, y) {
//     console.log(name, x + y);
//   }

//   return calc;
// }

// const calc1 = createCalc();

// calc1(10, 20);

//!======================================================

// function createCalc(base) {

//   function calc(y) {
//     console.log(`${base} + ${y} = ${base + y}`);
//   }

//   return calc;
// }

// const calc1 = createCalc(25);
// const calc2 = createCalc(10);
// const calc3 = createCalc(0);

// calc1(10);
// calc1(35);
// calc1(12);

// calc2(12);
// calc2(25);
// calc2(14);

// calc3(12);
// calc3(25);
// calc3(14);
