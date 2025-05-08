/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

function createPromise(delay) {
  const promise = new Promise((res, rej) => {
    const isActive = Math.random() > 0.4;
    setTimeout(() => {
      if (isActive) {
        res('🤑');
      } else {
        rej('👿');
      }
    }, delay);
  });

  return promise;
}

startBtn.addEventListener('click', () => {
  clearContainer();
  const promises = [];

  for (let i = 0; i < 3; i++) {
    const promise = createPromise(i * 100);

    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });

    promises.push(promise);
  }

  Promise.all(promises)
    .then(() => {
      result.textContent = 'Ви виграли бонус бай';
    })
    .catch(() => {
      result.textContent = 'Спробуйте ще раз. Вам обовязково пощастить!!!';
    });
});

function clearContainer() {
  result.textContent = '';
  container.children[0].textContent = '';
  container.children[1].textContent = '';
  container.children[2].textContent = '';
}

//!======================================================
