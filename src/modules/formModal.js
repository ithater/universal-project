import * as $ from 'jquery';

const formModal = () => {
	const closeBtn = $('.modal-subscribe__close');
	const modal = $('.modal-subscribe');
	const overlay = $('.modal-subscribe__overlay');

	const close = () => modal.removeClass('modal-subscribe--visible');

	closeBtn.on('click', close);
	overlay.on('click', close);
	window.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') close();
	});


	const random = (min, max) => Math.floor((max - min) * Math.random()) + min;
	
	const setCookie = (key, value, expires) => {
		let cookieString = '';
		cookieString += `${encodeURIComponent(key)}=`;
		cookieString += `${encodeURIComponent(value)};`;
		cookieString += `max-age=${expires * 60 * 60};`;
		cookieString += `path=/;`;
		document.cookie = cookieString;
	};

	const getCookie = key => {
		const cookies = document.cookie;
		const datas = cookies.split('; ');
		let value = 'not found';
		datas.every(cookie => {
			const [name, val] = cookie.split('=');

			if (name === key) {
				value = val;
				return false;
			}

			return true;
		});
		return value;
	};

	setTimeout(() => {
		if (!window.subscription && !(getCookie('showed') === 'showed')) {
			modal.addClass('modal-subscribe--visible');
			setCookie('showed', 'showed', 0.5);
		}

	}, random(8, 14) * 1000);

};

export default formModal;
