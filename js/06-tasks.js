/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = 'free';

if (sub === 'pro' || sub === 'vip') {
  console.log('має доступ');
}

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isFriend && isOnline && !isDnd;

console.log('Можно открыть чат? ', canOpenChat);

function f() {}
