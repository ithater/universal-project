const downloadComments = () => {
	const downloadBtn = document.querySelector('.comments-download-more');
	let dbData = 'no data';

	const render = () => {
		const iterations = dbData.length > 2 ? 3 : dbData.length;
		downloadBtn.remove();
		for (let i = 0; i < iterations; i++) {
			const { date, name, message, likes, image  } = dbData[i];
			const commentCard = document.createElement('div');
			const likesClass = parseInt(likes) > 0 ? 'positive' : 'negative';

			commentCard.className = 'comments-comment-card comments__comment-card';
			commentCard.innerHTML = `
				<img
					src="${image}"
					alt="${name}"
					class="comments-comment-card__avatar"
				/>

				<div class="comments-comment-card__wrapper">
					<div class="comments-comment-card__info">
						<span class="comments-comment-card__name">${name}</span>
						<span class="comments-comment-card__date">${date}</span>
					</div>
					<!-- /.comments-comments-card__info -->
					<p class="comments-comment-card__text">
						${message}
					</p>
					<div class="comments-comment-card__panel">
						
							<img
								src="./assets/image/comment-icon.svg"
							
								alt="Иконка комментарния"
								class="comments-comment-card__replay-icon"
							/>
						
						<span class="comments-comment-card__replay-text">Ответить</span>
						
            <button class="comments-comment-card__rating-button">
            <svg
            width="15"
            height="15"
            class="comments-comment-card__like"
          >
            <use xlink:href="./assets/image/rating.svg#Thumb-like"></use>
          </svg>
          </button>
          
         


            <span 
            data-likes="${parseInt(likes)}"
						class="comments-comment-card__like-counter comments-comment-card__like-counter--${likesClass}"
						>${likes}</span>
						
						          
            <button class="comments-comment-card__rating-button">
            <svg
            width="15"
            height="15"
            class="comments-comment-card__dislike"
          >
            <use xlink:href="./assets/image/rating.svg#Thumb-dislike"></use>
          </svg>
          </button>

						</div>
				</div>
				<!-- /.comments-comments-card__wrapper -->
			`;

			// downloadBtn.insertAdjacentElement('beforebegin', commentCard);
			document.querySelector('.comments__container').append(commentCard);
		}

		dbData.splice(0, iterations);
		if (dbData.length > 0) document.querySelector('.comments__container').append(downloadBtn);
	};

	downloadBtn.addEventListener('click', async () => {
		if (dbData === 'no data') {
			const data = await fetch('./assets/db-comments.json');
			dbData = await data.json();
			render();
		} else render();
	});
};

export default downloadComments;
