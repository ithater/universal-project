export default class Validation {
	constructor({
		form,
		email,
		error,
		//  {
		// 	className,
		// 	message: {
		// 		require,
		// 		email
		// 	}
		// }
	}) {
		this.form = document.querySelector(form);
		this.emailInput = document.querySelector('#' + email.id);
		this.valid = false;
		this.display = false;
		this.error = error;

		const errElem = document.createElement('label');
		errElem.for = email.id;
		errElem.className = error.className;

		this.errElem = errElem;
		this.onInput = false;
		this.init();
	}

	onInputValidation() {
		this.form.addEventListener('input', () => {
			const value = this.emailInput.value;
			const display = this.display;
			this.valid = this.validateEmail(value);
			this.onInput = true;

			if (this.valid) {
				if (display) {
					this.errElem.remove();
					this.display = false;
				}
			} else {
				if (value.trim() === '') {
					if (display) {
						this.errElem.textContent =  this.error.message.require;
					} else {
						this.emailInput.insertAdjacentElement('afterend', this.errElem);
						this.errElem.textContent =  this.error.message.require;
						this.display = true;
					}
				} else {
					if (display) {
						this.errElem.textContent =  this.error.message.email;
					} else {
						this.emailInput.insertAdjacentElement('afterend', this.errElem);
						this.errElem.textContent =  this.error.message.email;
						this.display = true;
					}
				}
			}
		});
	}

	init() {
		this.form.addEventListener('submit', evt => {
			evt.preventDefault();
			const value = this.emailInput.value;
			const display = this.display;
			this.valid = this.validateEmail(value);

			if (!this.onInput) {
				if (this.valid) {
					if (display) {
						this.errElem.remove();
						this.display = false;
					}
				} else {
					if (value.trim() === '') {
						if (display) {
							this.errElem.textContent =  this.error.message.require;
						} else {
							this.emailInput.insertAdjacentElement('afterend', this.errElem);
							this.errElem.textContent =  this.error.message.require;
							this.display = true;
						}
					} else {
						if (display) {
							this.errElem.textContent =  this.error.message.email;
						} else {
							this.emailInput.insertAdjacentElement('afterend', this.errElem);
							this.errElem.textContent =  this.error.message.email;
							this.display = true;
						}
					}
				}

				this.onInputValidation();
				this.onInput = true;
			}
		});
	}

	validateEmail(data)  {
		// eslint-disable-next-line no-useless-escape
		return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(data);
	}
}
