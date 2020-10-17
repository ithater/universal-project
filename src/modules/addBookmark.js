import * as $ from 'jquery';

const addBookmark = () => {
	const bookmark = $('.bookmark');
	bookmark.on('click', function() {
		$(this).toggleClass('bookmark--active');
	});
};

export default addBookmark;

