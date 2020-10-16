import Validation from '@modules/Validation';

const subscription = () => {
	const form = document.getElementById('subscribe-form');
	// eslint-disable-next-line no-useless-escape

	const validation = new Validation({
		form: '#subscribe-form',
		email: {
			id: 'subscribe-email'
		},
		error: {
			className: 'invalid',
			message: {
				require: 'Данное поле должно быть заполнено',
				email: 'Введите корректный email'
			}
		}
	});

	form.addEventListener('submit', evt => {
		evt.preventDefault();
		const valid = validation.valid;

		if (valid) {
			const fromData = new FormData(evt.target);
			const body = {};

			fromData.forEach((val, key) => body[key] = val);

			console.log(body);
			fetch('./assets/php/send.php', {
				method: 'POST',
				body
			})
				.then(response => {
					console.log(response);
				});
		}
	});



};

export default subscription;
