import * as $ from 'jquery';
const recomendationTabs = () => {
	const trigers = $('.recommended-tabs-buttons__button');
	const contents = $('.recommended-tabs-content__item');

	trigers.on('click', function(evt) {
		evt.preventDefault();
		const target = $(this).attr('data-target');
		console.log(target);
		contents.removeClass('recommended-tabs-content__item--visible');
		$(target).addClass('recommended-tabs-content__item--visible');
	});
};

export default recomendationTabs;
