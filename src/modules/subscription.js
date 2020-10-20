import Validation from '@modules/Validation';

const subscription = () => {
	const footerForm = document.getElementById('subscribe-form');
	const modalForm = document.getElementById('modal-subscribe-form');
	const modalSubscr = document.querySelector('.modal-subscribe');
	const modalThx = document.querySelector('.modal-result');

	const validateEmail = value => {
		if (value.trim() === '') return 'require';
		// eslint-disable-next-line no-useless-escape
		const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
		if (isEmail) return 'valid';
		else return 'invalid';
	};

	const message = {
		require: 'Данное поле должно быть заполнено',
		invalid: 'Введите корректный email'
	};


	const footerFormValidation = new Validation({
		formId: 'subscribe-form',
		input: {
			inputId: 'subscribe-email',
			validationFunc: validateEmail,
		},
		error: {
			className: 'invalid',
			message
		},

	});

	const modalFormValidation = new Validation({
		formId: 'modal-subscribe-form',
		input: {
			inputId: 'modal-subscribe-email',
			validationFunc: validateEmail,
		},
		error: {
			className: 'invalid',
			message
		}
	});



	footerForm.addEventListener('submit', evt => {
		evt.preventDefault();
		const valid = footerFormValidation.valid;
		const form = evt.target;
		if (valid === 'valid') {
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
		if (valid === 'valid') {
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
