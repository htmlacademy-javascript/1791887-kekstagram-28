import { describe, expect, it } from 'vitest';
import { checkString } from './functions';
import { isPalindrome } from './functions';
import { extractNumber } from './functions';
import { myPadStart } from './functions';

describe('Функция для проверки длины строки.', () => {
	const TEST_STRING = 'проверяемая строка';
	const { length } = TEST_STRING;

	it('Длина строки меньше второго аргумента', () => expect(checkString(TEST_STRING, length + 1)).toBe(true));
	it('Длина строки равна второму аргументу', () => expect(checkString(TEST_STRING, length)).toBe(true));
	it('Длина строки больше второго аргумента', () => expect(checkString(TEST_STRING, length - 1)).toBe(false));
});

describe('Функция для проверки, является ли строка палиндромом.', () => {
	it('Строка является палиндромом', () => expect(isPalindrome('топот')).toBe(true));
	it('Палиндром с разным регистром', () => expect(isPalindrome('ДовОд')).toBe(true));
	it('Не палиндром', () => expect(isPalindrome('Кекс')).toBe(false));
	it('Палиндром с пробелами', () => expect(isPalindrome('Лёша на полке клопа нашёл ')).toBe(true));
});

describe('Функция для извлечения цифр из строки.', () => {
	it('Строка содержит цифры в начале', () => expect(extractNumber('2023 год')).toBe(2023));
	it('Строка содержит цифры в конце', () => expect(extractNumber('ECMAScript 2022')).toBe(2022));
	it('Строка содержит цифры в разных местах, нужно конкетинировать', () => expect(extractNumber('1 кефир, 0.5 батона')).toBe(105));
	it('Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.', () => expect(extractNumber('агент 007')).toBe(7));
	it('Строка не содержит цифр', () => expect(extractNumber('а я томат')).toBeNaN());
	it('Число вернет число', () => expect(extractNumber(2023)).toBe(2023));
	it('Дробное число', () => expect(extractNumber(1.5)).toBe(15));
	it('Отрицательное число', () => expect(extractNumber(-1)).toBe(1));
});

describe('Функция для добавления символов в строку.', () => {
	it('Добавочный символ использован один раз', () => expect(myPadStart('1', 2, '0')).toBe('01'));
	it('Добавочный символ использован три раза', () => expect(myPadStart('1', 4, '0')).toBe('0001'));
	it('Добавочные символы обрезаны с конца', () => expect(myPadStart('q', 4, 'werty')).toBe('werq'));
	it('Добавочные символы использованы полтора раза', () => expect(myPadStart('q', 4, 'we')).toBe('wweq'));
	it('Добавочные символы не использованы, исходная строка не изменена', () => expect(myPadStart('qwerty', 4, '0')).toBe('qwerty'));
});
