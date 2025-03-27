/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
//!======================================================

// const arr = [1, 2, 3, 4];

// const copy = [...arr,'START', ...arr, 'END'];

// console.log(arr, copy);

//!======================================================
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const numbers = [...arr1, ...arr1, ...arr1];
// console.log(numbers);

//!======================================================
// const arr3 = [7, 8, 9];
// const arr = [1, 2, 6];

// arr.push(...arr3);

// console.log(arr);

//!======================================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const max = Math.max(...arr1, ...arr2, ...arr3);

//!======================================================
/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const max = Math.max(...temps);
// const min = Math.min(...temps);

//!======================================================

// const defaultSetting = {
//   volume: 100,
//   speed: 10,
//   damage: 50,
// };

// const copy = {
//   x: 10,
//   y: 20,
//   ...defaultSetting,
//   r: 50,
// };

// console.log(copy);

//!======================================================

// const user = {};
// const awdawd = { ...user };

//!======================================================
/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {};

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

//!======================================================

// function foo(...items) {
//   console.log(items);
// }

// foo(10, 20, 30);

// foo('Hello', 'World');

// foo('Hello', 'World', '234234', 345, 123, 5456);

//!======================================================
