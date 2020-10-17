import * as $ from 'jquery';

const resultModal = () => {
	const closeBtn = $('.modal-result__close');
	const modal = $('.modal-result');
	const overlay = $('.modal-result__overlay');

	const close = () => modal.removeClass('modal-result--visible');

	closeBtn.on('click', close);
	overlay.on('click', close);
};

export default resultModal;
