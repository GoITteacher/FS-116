/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ a, b, c, d }) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const houseInfo = {
  a: 10,
  b: 15,
  c: 20,
  d: 30,
};

const perimeter = calculateHousePerimeter(houseInfo);
console.log(`Периметр будинку: ${perimeter}`);
