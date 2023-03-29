import {getTemplate} from './utils.js';

const COMMENTS_PACK_SIZE = 5;

const template = getTemplate('comment');
const commentList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

let savedComment = [];

commentsCount.classList.remove('hidden');
//commentsLoader.classList.remove('hidden');

const renderComment = (comment) => {
	const newComment = template.cloneNode(true);
	newComment.querySelector('.social__picture').src = comment.avatar;
	newComment.querySelector('.social__text').textContent = comment.message;
	commentList.append(newComment);
};

const onButtonClick = () => {
	const showedComment = commentList.children.length;
	let endListComments = showedComment + COMMENTS_PACK_SIZE;
	const allCommentsShow = endListComments >= savedComment.length;

	endListComments = allCommentsShow ? savedComment.length : endListComments;

	const slicedComments = savedComment.slice(showedComment, endListComments);

	const commentFragment = document.createDocumentFragment();
	for (const comment of slicedComments) {
		commentFragment.appendChild(renderComment(comment));
	}
	commentList.appendChild(commentFragment);

	commentsCount.textContent = `${endListComments} из ${savedComment.length} комментариев`;

	commentsLoader.hidden = allCommentsShow;
};

commentsLoader.addEventListener('click', onButtonClick);

const renderComments = (comments) => {
	savedComment = comments;
	commentsLoader.click();
};

const clearComments = () => {
	commentList.innerHTML = '';
	savedComment = [];
};

export {renderComments, clearComments};
