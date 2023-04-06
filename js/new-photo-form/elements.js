/** @type {HTMLFormElement} */
const imageUploadForm = document.querySelector('.img-upload__form');

/** @type {HTMLInputElement} */
const hashtagField = imageUploadForm.elements.hashtags;

/** @type {HTMLTextAreaElement} */
const descriptionField = imageUploadForm.elements.description;

export {imageUploadForm, hashtagField, descriptionField};
