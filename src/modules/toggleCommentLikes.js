const toggleCommentLikes = () => {
	const commentBox = document.querySelector('.comments__container');

	commentBox.addEventListener('click', evt => {
		const target = evt.target.closest('svg');
		const panel = evt.target.closest('.comments-comment-card__panel');

		if (!panel) return;

		const like = panel.querySelector('.comments-comment-card__like');
		const dislike = panel.querySelector('.comments-comment-card__dislike');
		const counter = panel.querySelector('.comments-comment-card__like-counter');
		const startCount = counter.dataset.likes;

		if (target === like) {
			if (like.classList.contains('comments-comment-card__like--active')) {
				like.classList.remove('comments-comment-card__like--active');
				counter.textContent = +startCount > 0 ? '+' + startCount : startCount;

			} else {
				like.classList.add('comments-comment-card__like--active');
				dislike.classList.remove('comments-comment-card__dislike--active');
				counter.textContent = (+startCount + 1) > 0 ? '+' + (+startCount + 1) : (+startCount + 1);
			}
		}

		if (target === dislike) {
			if (dislike.classList.contains('comments-comment-card__dislike--active')) {
				dislike.classList.remove('comments-comment-card__dislike--active');
				counter.textContent = +startCount > 0 ? '+' + startCount : startCount;
			} else {
				dislike.classList.add('comments-comment-card__dislike--active');
				like.classList.remove('comments-comment-card__like--active');
				counter.textContent = (+startCount - 1) > 0 ? '+' + (+startCount - 1) : (+startCount - 1);
			}
		}

		if (+counter.textContent === 0) {
			counter.classList.remove('comments-comment-card__like-counter--negative');
			counter.classList.remove('comments-comment-card__like-counter--positive');
		} else if (+counter.textContent > 0) {
			counter.classList.add('comments-comment-card__like-counter--positive');
			counter.classList.remove('comments-comment-card__like-counter--negative');
		} else if (+counter.textContent < 0) {
			counter.classList.remove('comments-comment-card__like-counter--positive');
			counter.classList.add('comments-comment-card__like-counter--negative');
		}



	});
};

export default toggleCommentLikes;
