import * as $ from 'jquery';

const formModal = () => {
	const closeBtn = $('.modal-subscribe__close');
	const modal = $('.modal-subscribe');
	const overlay = $('.modal-subscribe__overlay');

	const close = () => modal.removeClass('modal-subscribe--visible');

	closeBtn.on('click', close);
	overlay.on('click', close);



	const random = (min, max) => Math.floor((max - min) * Math.random()) + min;
	setTimeout(() => {
		modal.addClass('modal-subscribe--visible');
	}, random(4, 10) * 10000);

};

export default formModal;
