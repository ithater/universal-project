import * as $ from 'jquery';
import 'jquery-validation';

const subscription = () => {
	const form = document.getElementById('subscribe-form');
	console.log('form: ', form);
	const emailInput = form.querySelector('input[name="email"]');
	console.log('emailInput: ', emailInput);
	// eslint-disable-next-line no-useless-escape
	const validate = data => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(data);
	form.addEventListener('submit', evt => {
		evt.preventDefault();
		const isValid = validate(emailInput.value);
		console.log('isValid: ', isValid);
	});



};

export default subscription;
