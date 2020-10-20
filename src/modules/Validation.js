export default class Validation {
	constructor({
		formId,
		input: {
			inputId,
			validationFunc
		},
		error,
		//  {
		// 	className,
		// 	message: {
		// 		require,
		// 		invalid
		// 	}
		// }
	}) {
		this.form = document.getElementById(formId);
		this.input = document.getElementById(inputId);
		this.valid = 'invalid';
		this.display = false;
		this.error = error;
		const errElem = document.createElement('label');
		errElem.for = inputId.id;
		errElem.className = error.className;
		this.errElem = errElem;
		this.validationFunc = validationFunc;
		this.onInput = false;
		this.init();
	}

	onInputValidation() {
		this.onInput = true;
		this.form.addEventListener('input', this.inputHandler.bind(this));
	}

	inputHandler(evt) {
		evt.preventDefault();
		const value = this.input.value;
		const display = this.display;
		this.valid = this.validationFunc(value);

		this.displayValidationResult(display);
	}

	displayValidationResult(display) {
		switch (this.valid) {
			case 'valid':
				if (display) {
					this.errElem.remove();
					this.display = false;
				}
				break;
			case 'require':
				if (display) {
					this.errElem.textContent =  this.error.message.require;
				} else {
					this.input.insertAdjacentElement('afterend', this.errElem);
					this.errElem.textContent =  this.error.message.require;
					this.display = true;
				}
				break;
			case 'invalid':
				if (display) {
					this.errElem.textContent =  this.error.message.invalid;
				} else {
					this.input.insertAdjacentElement('afterend', this.errElem);
					this.errElem.textContent =  this.error.message.invalid;
					this.display = true;
				}
				break;
		}
	}

	initHandler(evt) {
		evt.preventDefault();
		if (this.onInput) return;


		const value = this.input.value;
		const display = this.display;
		this.valid = this.validationFunc(value);

		this.displayValidationResult(display);
		this.onInputValidation();
	}

	init() {
		this.form.addEventListener('submit', this.initHandler.bind(this));
	}
}
