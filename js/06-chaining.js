/**
 * Ланцюжки методів
 */
// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(el => el > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(el => el * 3);
// console.log(multByThree);

// const sorted = multByThree.toSorted((a, b) => a - b);
// console.log(sorted);

// const sortedbyChaining = numbers
//   .filter(el => el > 2)
//   .map(el => el * 3)
//   .sort((a, b) => a - b);

// console.log(sortedbyChaining);

/**
 * -------------------------------------
 */
// const allCars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 3,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 8,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const copy = allCars
//   .map(car => {
//     const copy = { ...car };
//     copy.price *= 0.9;
//     return copy;
//   })
//   .filter(car => car.price > 20000)
//   .filter((car, index, cars) => car.amount > cars.length);

// console.table(copy);

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(allCars));

//!======================================================

// const arr = [1, 4, 3, 23, 4, 6, 7, 2, 2];

// const copy = arr
//   .map((el, index) => el * index)
//   .filter((el, index, arr) => {
//     return el > arr[index - 1];
//   });

// console.log(copy);
