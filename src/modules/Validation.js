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
		message,
		type
	}) {
		this.type = type;

		if (this.type === 'email') {
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

		if (this.type === 'message') {
			this.form = document.querySelector(form);
			this.messageInput = document.querySelector('#' + message.id);
			this.valid = false;
			this.display = false;
			this.error = error;

			const errElem = document.createElement('label');
			errElem.for = message.id;
			errElem.className = error.className;

			this.errElem = errElem;
			this.onInput = false;
		}

		this.init();

	}

	validateMessage(value) {
		return value.trim() >= 100;
	}

	onInputValidation() {
		this.form.addEventListener('input', () => {
			let value;
			if (this.type === 'email') value = this.emailInput.value;
			else if (this.type === 'message') value = this.messageInput.value;
			const display = this.display;
			if (this.type === 'email') this.valid = this.validateEmail(value);
			else if (this.type === 'message') this.valid = this.validateMessage(value);
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
						if (this.type === 'email') this.errElem.textContent =  this.error.message.email;
						else if (this.type === 'message') this.errElem.textContent =  this.error.message.length;
					} else {
						if (this.type === 'email') {
							this.emailInput.insertAdjacentElement('afterend', this.errElem);
							this.errElem.textContent =  this.error.message.email;
							this.display = true;
						}	else if (this.type === 'message') {
							this.messageInput.insertAdjacentElement('afterend', this.errElem);
							this.errElem.textContent =  this.error.message.length;
							this.display = true;
						}

					}
				}
			}
		});
	}

	init() {
		this.form.addEventListener('submit', evt => {
			evt.preventDefault();
			let value;
			if (this.type === 'email') value = this.emailInput.value;
			else if (this.type === 'message') value = this.messageInput.value;
			const display = this.display;
			if (this.type === 'email') this.valid = this.validateEmail(value);
			else if (this.type === 'message') this.valid = this.validateMessage(value);

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
							if (this.type === 'email') this.emailInput.insertAdjacentElement('afterend', this.errElem);
							if (this.type === 'message') this.messageInput
								.insertAdjacentElement('afterend', this.errElem);
							this.errElem.textContent =  this.error.message.require;
							this.display = true;
						}
					} else {
						if (display) {
							if (this.type === 'email') this.errElem.textContent =  this.error.message.email;
							else if (this.type === 'message') this.errElem.textContent =  this.error.message.length;
						} else {
							if (this.type === 'email') {
								this.emailInput.insertAdjacentElement('afterend', this.errElem);
								this.errElem.textContent =  this.error.message.email;
								this.display = true;
							}	else if (this.type === 'message') {
								this.messageInput.insertAdjacentElement('afterend', this.errElem);
								this.errElem.textContent =  this.error.message.length;
								this.display = true;
							}

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
