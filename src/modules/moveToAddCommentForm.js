const moveToAddCommentForm = () => {
	const commentBox = document.querySelector('.comments__container');
	const from = document.getElementById('add-comment');
	commentBox.addEventListener('click', evt => {
		const target = evt.target;
		const moveToAddCommentForm = () => from.scrollIntoView({ block: "center", behavior: "smooth" });
		const triggers = [
			'.comments-comment-card__replay-icon',
			'.comments-comment-card__replay-text',
			'.comments__button',
		];
		if (target.closest(triggers.join(', '))) moveToAddCommentForm();
	});
};

export default moveToAddCommentForm;
