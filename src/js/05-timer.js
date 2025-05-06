/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
//!======================================================

let intervalId;

//!======================================================

startBtn.addEventListener('click', () => {
  const initTime = new Date();

  intervalId = setInterval(() => {
    const currentTime = new Date();
    const diffMS = currentTime - initTime;
    const timeStr = timeToStr(diffMS);
    clockface.textContent = timeStr;
  }, 1000);

  stopBtn.disabled = false;
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clockface.textContent = '00:00:00';
});

//!======================================================

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}

function timeToStr(ms) {
  const { hours, mins, secs } = getTimeComponents(ms);

  let h = hours.toString().padStart(2, '0');
  let m = mins.toString().padStart(2, '0');
  let s = secs.toString().padStart(2, '0');

  return `${h}:${m}:${s}`;
}
