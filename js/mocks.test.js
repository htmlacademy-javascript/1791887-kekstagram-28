import { describe, expect, it } from 'vitest';
import { getPictures } from './mocks';

describe.todo('Функция для проверки длины строки.', () => {
	const mockedPhotos = getPictures();
	const { length } = 	mockedPhotos;

	const ids = new Set();
	const photoURLs = new Set();
	const commentIds = new Set();
	let commentsAmount = 0;

	for (const {id, url, comments} of mockedPhotos) {
		ids.add(id);
		photoURLs.add(url);

		commentsAmount += comments.length;
		for (const comment of comments) {
			commentIds.add(comment.id);
		}
	}

	it('У каждой фотографии уникальный id', () => expect(ids.size === length).toBeTruthy());
	it('У каждой фотографии уникальный url', () => expect(photoURLs.size === length).toBeTruthy());
	it('У каждой комментария уникальный id', () => expect(commentIds.size === commentsAmount).toBeTruthy());
});
