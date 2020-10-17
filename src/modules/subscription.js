import Validation from '@modules/Validation';

const subscription = () => {
	const footerForm = document.getElementById('subscribe-form');
	const modalForm = document.getElementById('modal-subscribe-form');
	// eslint-disable-next-line no-useless-escape

	const footerFormValidation = new Validation({
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

	const modalFormValidation = new Validation({
		form: '#modal-subscribe-form',
		email: {
			id: 'modal-subscribe-email'
		},
		error: {
			className: 'invalid',
			message: {
				require: 'Данное поле должно быть заполнено',
				email: 'Введите корректный email'
			}
		}
	});



	footerForm.addEventListener('submit', evt => {
		evt.preventDefault();
		const valid = footerFormValidation.valid;

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

	modalForm.addEventListener('submit', evt => {
		evt.preventDefault();
		const valid = modalFormValidation.valid;

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
