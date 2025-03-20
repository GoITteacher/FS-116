/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10

  for (let i = 0; i < 5; i += 1) {
    console.log(a); // 20
    console.log(globalValue); // 10

    if (i === 2) {
      const i = 5;
      console.log(a); // 20
      console.log(globalValue); // 10
      console.log(i);
    }
  }
}

// ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

//!======================================================

function getSum(arr) {
  let res = 0;
  for (const item of arr) {
    res += item;
  }
  return res;
}

function getMult(arr) {
  let res = 1;
  for (const item of arr) {
    res *= item;
  }
  return res;
}

function getAvg(arr) {
  let res = 0;
  for (const item of arr) {
    res += item;
  }
  return res / arr.length;
}

function getNumbers() {
  const arr = Array.from(arguments);

  let sum = getSum(arr);
  let mult = getMult(arr);
  let avg = getAvg(arr);

  return [sum, mult, avg];
}
