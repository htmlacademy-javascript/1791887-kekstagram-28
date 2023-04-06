import Pristine from 'pristinejs';
import { imageUploadForm, hashtagField } from './elements.js';

const PRISTINE_OPTIONS = {
	classTo: 'img-upload__field-wrapper',
	errorTextParent: 'img-upload__field-wrapper',
	errorTextClass: 'img-upload__field-wrapper--error',
};

const HASHTAG_REGEXP = /^#[a-zа-яё0-9]*$/i;
const MAX_NUMBER_HASHTAG = 5;

const pristine = new Pristine(imageUploadForm, PRISTINE_OPTIONS);

let hashtagsErrorMessage = 'Что-то неверно с вводом';

/**
 * @param {string} value
 */
const validateHashtags = (value) => {

	if (value === '') {
		return true;
	}

	const tags = value.trim().toLocaleLowerCase().split(' ');

	return tags.every((tag) => {
		if (tag[0] !== '#') {
			hashtagsErrorMessage = 'Хэштег должен начинаться с #';
			return false;
		}

		if (tag.length > 20) {
			hashtagsErrorMessage = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
			return false;
		}

		if (tag.length === 1) {
			hashtagsErrorMessage = 'Хэштег не может состоять только из одной решётки';
			return false;
		}

		if (!HASHTAG_REGEXP.test(tag)) {
			hashtagsErrorMessage =
				'Хэштег должен состоять из букв и цифр; не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
			return false;
		}

		if (tags.length > MAX_NUMBER_HASHTAG) {
			hashtagsErrorMessage = 'Нельзя указать больше пяти хэш-тегов';
			return false;
		}

		if (tags.length !== new Set(tags).size) {
			hashtagsErrorMessage = 'Один и тот же хэш-тег не может быть использован дважды';
			return false;
		}

		return true;
	});
};

pristine.addValidator(hashtagField, validateHashtags, () => hashtagsErrorMessage);

const resetValidation = () => pristine.reset();
const validate = () => pristine.validate();

export {resetValidation, validate};
