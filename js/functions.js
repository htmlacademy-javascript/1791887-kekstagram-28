/* eslint-disable no-unused-vars */
/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. */

const checkString = (stringValue, maxLength) => stringValue.length <= maxLength;

checkString('проверяемая строка', 10);

/* Функция для проверки, является ли строка палиндромом.
Функция может принимать строку в разном регистре, а также строка может содержать пробелы, что
не должно мешать проверке на палиндром. */

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('Лёша на полке клопа нашёл ');

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает
их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('ECMAScript 2022'); // 2022

/* Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
 — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
  Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная,
  она обрезается с конца.*/

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

// Добавочные символы обрезаны с конца
myPadStart('q', 4, 'werty'); // 'werq'
