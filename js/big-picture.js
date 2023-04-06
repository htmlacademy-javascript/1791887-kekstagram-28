import { renderComments, clearComments } from './comment.js';
import {isEscapeKey, toggleModalClasses} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const userModalCloseElement = bigPicture.querySelector('.cancel');

const renderPictureData = ({url, description, likes}) => {
	bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
	bigPicture.querySelector('.social__caption').textContent = description;
	bigPicture.querySelector('.likes-count').textContent = likes;
};

const onDocumentEscapeKeydown = (evt) => {
	if (isEscapeKey(evt)) {
		evt.preventDefault();
		closeUserModal();
	}
};

function closeUserModal () {
	toggleModalClasses(bigPicture, false);

	clearComments();
}

userModalCloseElement.addEventListener('click', () => closeUserModal ());


const showBigPicture = (data) => {
	toggleModalClasses(bigPicture, true);

	document.addEventListener('keydown', onDocumentEscapeKeydown);
	renderPictureData(data);
	renderComments(data.comments);
};

export {showBigPicture};
