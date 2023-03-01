import { describe, expect, it } from 'vitest';

/**
 * TODO: Заменить своими функциями
 */
const EMPTY_FUNCTION = () => {};

describe.todo('Функция для проверки длины строки.', () => {
	const TEST_STRING = 'проверяемая строка';
	const { length } = TEST_STRING;

	it('Длина строки меньше второго аргумента', () => expect(EMPTY_FUNCTION(TEST_STRING, length + 1)).toBe(true));
	it('Длина строки равна второму аргументу', () => expect(EMPTY_FUNCTION(TEST_STRING, length)).toBe(true));
	it('Длина строки больше второго аргумента', () => expect(EMPTY_FUNCTION(TEST_STRING, length - 1)).toBe(false));
});

describe.todo('Функция для проверки, является ли строка палиндромом.', () => {
	it('Строка является палиндромом', () => expect(EMPTY_FUNCTION('топот')).toBe(true));
	it('Палиндром с разным регистром', () => expect(EMPTY_FUNCTION('ДовОд')).toBe(true));
	it('Не палиндром', () => expect(EMPTY_FUNCTION('Кекс')).toBe(false));
	it('Палиндром с пробелами', () => expect(EMPTY_FUNCTION('Лёша на полке клопа нашёл ')).toBe(true));
});

describe.todo('Функция для извлечения цифр из строки.', () => {
	it('Строка содержит цифры в начале', () => expect(EMPTY_FUNCTION('2023 год')).toBe(2023));
	it('Строка содержит цифры в конце', () => expect(EMPTY_FUNCTION('ECMAScript 2022')).toBe(2022));
	it('Строка содержит цифры в разных местах, нужно конкетинировать', () => expect(EMPTY_FUNCTION('1 кефир, 0.5 батона')).toBe(105));
	it('Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.', () => expect(EMPTY_FUNCTION('агент 007')).toBe(7));
	it('Строка не содержит цифр', () => expect(EMPTY_FUNCTION('а я томат')).toBeNaN());
	it('Число вернет число', () => expect(EMPTY_FUNCTION(2023)).toBe(2023));
	it('Дробное число', () => expect(EMPTY_FUNCTION(1.5)).toBe(15));
	it('Отрицательное число', () => expect(EMPTY_FUNCTION(-1)).toBe(1));
});

describe.todo('Функция для добавления символов в строку.', () => {
	it('Добавочный символ использован один раз', () => expect(EMPTY_FUNCTION('1', 2, '0')).toBe('01'));
	it('Добавочный символ использован три раза', () => expect(EMPTY_FUNCTION('1', 4, '0')).toBe('0001'));
	it('Добавочные символы обрезаны с конца', () => expect(EMPTY_FUNCTION('q', 4, 'werty')).toBe('werq'));
	it('Добавочные символы использованы полтора раза', () => expect(EMPTY_FUNCTION('q', 4, 'we')).toBe('wweq'));
	it('Добавочные символы не использованы, исходная строка не изменена', () => expect(EMPTY_FUNCTION('qwerty', 4, '0')).toBe('qwerty'));
});
