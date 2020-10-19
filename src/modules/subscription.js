import Validation from '@modules/Validation';

const subscription = () => {
	const footerForm = document.getElementById('subscribe-form');
	const modalForm = document.getElementById('modal-subscribe-form');
	const modalSubscr = document.querySelector('.modal-subscribe');
	const modalThx = document.querySelector('.modal-result');
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
		const form = evt.target;
		if (valid) {
			const fromData = new FormData(form);
			fetch('./assets/php/send.php', {
				method: 'POST',
				body: fromData
			})
				.then(response => {
					if (response.status !== 200) throw new Error(response.status);
					form.querySelectorAll('input').forEach(input => {
						console.log(input);
						const type = input.type.toLowerCase();
						if (type !== 'button' || type !== 'range') {
							input.value = '';
						}
					});
					modalThx.classList.add('modal-result--visible');
					window.subscription = true;
				})
				.catch(err => console.error(err));
		}
	});

	modalForm.addEventListener('submit', evt => {
		evt.preventDefault();
		const valid = modalFormValidation.valid;
		const form = evt.target;
		if (valid) {
			const fromData = new FormData(form);
			fetch('./assets/php/send.php', {
				method: 'POST',
				body: fromData
			})
				.then(response => {
					if (response.status !== 200) throw new Error(response.status);
					form.querySelectorAll('input').forEach(input => {
						const type = input.type.toLowerCase();
						if (type !== 'button' || type !== 'range') {
							input.value = '';
						}
					});
					modalSubscr.classList.remove('modal-subscribe--visible');
					modalThx.classList.add('modal-result--visible');
				})
				.catch(err => console.error(err));
		}
	});
};

export default subscription;
