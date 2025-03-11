/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean(+398)); // true
// console.log(Boolean('aswdaf')); // true
// console.log(Boolean('srgdrtg')); // true

//!======================================================

// userAge > 18 && userBalance > 500;

// userType === 'amin' || userType === 'manager';

//!======================================================

/**
 * --------------------------------
 */

// && Повертає першу брехню
// Якщо немає брехні повертає праву частинку

// console.log(5 && 4); //4
// console.log(5 && 'mango'); // 'mango'

// false && true && true
/**
 * --------------------------------
 */

// || Повертає першу правду
// Якщо немає правди повертає праву частинку

// console.log(false || 5); //5
// console.log(false || null); // null

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!false);

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); // 3

//!======================================================

//false = 0
// true = 1
// && = *
// || = +

// true || false && false

// 0 + 1 * 1 = 1 - true

// true || false && (true && false || false && true) && false && true || false;

// 1 + 0 * (1 * 0 + 0 * 1) * 0 * 1 + 0 =
