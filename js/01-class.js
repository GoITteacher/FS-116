/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// const user1 = {
//   firstname: 'Vasya',
//   lastName: 'Test',
//   age: 25,

// };
// const user2 = {
//   firstname: 'Vasya',
//   lastName: 'Test',
//   age: 25,
// };
// const user3 = {
//   firstname: 'Vasya',
//   lastName: 'Test',
//   age: 25,
// };
// const user4 = {
//   firstname: 'Vasya',
//   lastName: 'Test',
//   age: 25,
// };
// const user5 = {
//   firstname: 'Vasya',
//   lastName: 'Test',
//   age: 25,
// };

// class User {

//   constructor(userFirstName, userLastName, userAge) {
//     this.firstname = userFirstName;
//     this.age = userAge;
//     this.lastName = userLastName;
//     this.balance = 0;
//   }

//   showName() {
//     console.log(this.firstname);
//   }

//   showAge() {
//     console.log(this.age);
//   }

//   showInfo() {
//     this.showName();
//     this.showAge();
//   }
// }

// const user1 = new User('Volodymyr', 'Pashchenko', 23);

// !======================================================

// class Student {
//   #balance;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.#balance = 0;
//   }

//   #showName() {
//     console.log('\n\n', this.name);
//   }

//   #showAge() {
//     console.log(this.age);
//   }

//   showInfo() {
//     this.#showName();
//     this.#showAge();
//     console.log('Balance:', this.#balance);
//   }

//   getStudentBalance() {
//     return this.#balance;
//   }

//   setStudentBalance(newBalance) {
//     if (newBalance < 1000) {
//       this.#balance = newBalance;
//     }
//   }
// }

// const student1 = new Student('Roman', 22);

// student1.showInfo();

// student1.balance = 9999999;

// student1.showInfo();

// student1.setStudentBalance(9999999);
// student1.setStudentBalance(500);

// student1.showInfo();

//!======================================================

// class Student {
//   #balance;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.#balance = 0;
//   }

//   set balance(newBalance) {
//     if (newBalance >= 0) {
//       this.#balance = newBalance;
//     }
//   }

//   get test() {
//     console.log('Hello test');
//   }
// }

// const student1 = new Student('Roman', 22);

// student1.balance = 35;

// console.log(student1.balance);

// student1.balance = 25;

// console.log(student1.balance);

// console.log(student1);

//!======================================================

// class Product {
//   static discount = 10;
//   static storeName = 'Halava';
//   static amount = 0;

//   constructor(title, price, amount) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;

//     Product.amount += amount;
//   }

//   showInfo() {
//     const info = `=====================
// Title: ${this.title}
// Price: ${this.price * Product.discount}
// Amount: ${this.amount}
// Total: ${this.price * Product.discount * this.amount}
// =====================\n`;

//     console.log(info);
//   }

//   static showTotalProductAmoun() {
//     console.log('Amount:', Product.amount);
//   }
// }

// const product1 = new Product('Iphone', 1500, 2);
// const product2 = new Product('MacBook', 3000, 5);
// const product3 = new Product('Audi', 20000, 1);

// console.log(Product.amount);

//!======================================================

// Product.discount = 0.9;

// product1.showInfo();

// Product.showTotalProductAmoun();

// product1.showInfo();
