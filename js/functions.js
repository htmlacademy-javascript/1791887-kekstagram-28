
/**
 * Функция для проверки строки.
 * @param {string} stringValue строка, которую нужно проверить
 * @param {number} maxLength  максимальная длина
 * @returns {boolean} 'true', если строка меньше или равна указанной длине, и 'false', если строка длиннее.
 */
const checkString = ({length}, maxLength) => length <= maxLength;

/**
 * Переворачивает строку
 * @param {string} string
 */
const reverseString = (string) => [...string].reverse().join('');

/**
 * Функция для проверки, является ли строка палиндромом.
 * @param {string} string
 * @returns
 */

const isPalindrome = (string) => {
	const normalizedString = string
		.toLowerCase()
		.replaceAll(' ', '');
	return normalizedString === reverseString(normalizedString);
};

/**
 * Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 * @param {string | number} input
 * @returns {number} возвращает в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть 'NaN'
 */
const extractNumber = (input) => {
	const stringWithOnlyDigits = String(input).replace(/\D/g, '');

	return parseInt(stringWithOnlyDigits,10);
};

/**
 *
 * @param {string} string исходная строка
 * @param {number} minLength минимальная длина
 * @param {string} pad строку с добавочными символами
 * @returns возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
 */
const myPadStart = (string, minLength, pad) => {
	const actualPad = minLength - string.length;

	if (actualPad <= 0) {
		return string;
	}
	return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

export {checkString, isPalindrome, extractNumber, myPadStart};
