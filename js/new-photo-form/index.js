import {imageUploadForm, descriptionField, hashtagField } from './elements.js';
import {isEscapeKey, toggleModalClasses} from '../utils.js';
import { resetValidation, validate } from './validation.js';

const uploadField = imageUploadForm.elements.filename;
const modalElement = imageUploadForm.querySelector('.img-upload__overlay');

const closeModal = () => imageUploadForm.reset();
const isFieldsActive = () => document.activeElement === hashtagField || document.activeElement === descriptionField;

/**
 * @param {KeyboardEvent} evt
 */

const onEscapeDown = (evt) => {
	if (isEscapeKey(evt) && !isFieldsActive()) {
		closeModal();
	}
};

uploadField.addEventListener('change', (evt) => {
	evt.preventDefault();
	toggleModalClasses(modalElement, true);
	document.addEventListener('keydown', onEscapeDown);
});

imageUploadForm.addEventListener('reset', () => {
	toggleModalClasses(modalElement, false);
	document.removeEventListener('keydown', onEscapeDown);

	resetValidation();
});

imageUploadForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	validate();
});
