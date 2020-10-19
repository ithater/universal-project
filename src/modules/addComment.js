import Validation from '@modules/Validation';

const addComment = () => {
	const from = document.getElementById('add-comment');
	const messageArea = document.getElementById('message');

	const сommentValidation = new Validation({
		form: '#add-comment',
		message: {
			id: 'message'
		},
		error: {
			className: 'invalid-message',
			message: {
				require: 'Данное поле должно быть заполнено',
				length: 'Введите минимум 100 символов'
			}
		},
		type: 'message'
	});



	const addComment = evt => {
		evt.preventDefault();

		if (!сommentValidation.valide) return;

		const { date, name, message, image  } = {
			date() {
				const dateObj = new Date();
				const prettier = val => (val > 9 ? val : '0' + val);
				const day = prettier(dateObj.getDate()),
					month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
						'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'][dateObj.getMonth()],
					hours = prettier(dateObj.getHours()),
					minutes = prettier(dateObj.getMinutes());

				return `${day} ${month}, ${hours}:${minutes}`;
			},
			name: 'Екатерина Орлова',
			image: './assets/image/current-user.png',
			message: messageArea.value,
		};

		const commentCard = document.createElement('div');
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
						<span class="comments-comment-card__date">${date()}</span>
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
						data-likes="0"
						class="comments-comment-card__like-counter"
						>0</span>
						
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

		if (document.querySelector('.comments-download-more')) {
			document.querySelector('.comments-download-more')
				.insertAdjacentElement('beforebegin', commentCard);
		} else {
			document.querySelector('.comments__container').append(commentCard);
		}

		messageArea.value = '';

	};

	from.addEventListener('submit', addComment);

};

export default addComment;
