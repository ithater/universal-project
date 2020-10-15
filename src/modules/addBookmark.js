import * as $ from 'jquery';

const addBookmark = () => {
	const bookmark = $('.offered-articles-main-card__bookmark');
	bookmark.on('click', function() {
		$(this).toggleClass('offered-articles-main-card__bookmark--active');
	});
};

export default addBookmark;

