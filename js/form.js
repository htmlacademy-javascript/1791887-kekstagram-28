import { resetScale } from './scale.js';
import {resetSlider} from './effects.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFile = imageUploadForm.querySelector('#upload-file');
const imageUpload = imageUploadForm.querySelector('.img-upload__overlay');
const cancelUpload = imageUpload.querySelector('#upload-cancel');
const hashtagField = imageUploadForm.querySelector('.text__hashtags');
const descriptionField = imageUploadForm.querySelector('.text__description');
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_NUMBER_HASHTAG = 5;
const ERROR_INPUT_HASHTAG = 'Неправильный формат хэштэга, должен начинаться с #';
const ERROR_INPUT_DESCRIPTION = 'Допустимое количество знаков не больше 140!';

const pristine = new Pristine(imageUploadForm, {
	classTo: 'img-upload__field-wrapper',
	errorTextParent: 'img-upload__field-wrapper',
	errorTextClass: 'img-upload__field-wrapper--error',
});

const closeUploadOnEscape = () => {
	document.removeEventListener('keydown', onEscapeDown);
};
const closeUploadFile = () => {
	cancelUpload.addEventListener('click', () => {
		imageUpload.classList.add('hidden');
		document.body.classList.remove('modal-open');
	});
	document.addEventListener('keydown', onEscapeDown);
	imageUploadForm.reset();
	resetScale();
	resetSlider();
};

uploadFile.addEventListener('change', (evt) => {
	evt.preventDefault();
	document.body.classList.add('modal-open');
	imageUpload.classList.remove('hidden');
	closeUploadFile();
});

function onEscapeDown (evt) {
	if (evt.key === 'Escape') {
		document.body.classList.remove('modal-open');
		imageUpload.classList.add('hidden');
		closeUploadOnEscape();
	}
}
hashtagField.addEventListener('keydown', (evt) => {
	if (evt.key === 'Escape') {
		evt.stopPropagation();
	}
});
descriptionField.addEventListener('keydown', (evt) => {
	if (evt.key === 'Escape') {
		evt.stopPropagation();
	}
});
const validateDescription = (value) => value.length <= 140;

const isValidTag = (tag) => HASHTAG_PATTERN.test(tag);
const hasValidNumber = (tags) => tags.length <= MAX_NUMBER_HASHTAG;
const hasUniqueTag = (tags) => {
	const lowerCaseTag = tags.map((tag) => tag.toLowerCase());
	return lowerCaseTag.length === new Set(lowerCaseTag).size;
};
const validateTags = (value) => {
	const tags = value
		.trim()
		.split(' ')
		.filter((element) => element.trim().length);
	return tags.every(isValidTag) && hasValidNumber(tags) && hasUniqueTag(tags);
};
pristine.addValidator(descriptionField, validateDescription,ERROR_INPUT_DESCRIPTION);
pristine.addValidator(hashtagField, validateTags, ERROR_INPUT_HASHTAG);
imageUploadForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	pristine.validate();
});
