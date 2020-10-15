// import Swiper styles
import 'swiper/swiper-bundle.css';
// import Swiper JS
import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper';

const sliderMain = () => {
	Swiper.use([Pagination, Autoplay, EffectFade]);
	// eslint-disable-next-line no-unused-vars
	const mySwiper = new Swiper('.article-cards-slider', {
		effect: 'fade',
		// direction: 'horizontal',
		speed: 400,
		loop: true,
		autoplay: true,
		pagination: {
			el: '.article-cards-slider-pagination',
			bulletClass: 'article-cards-slider-pagination__dot',
			bulletActiveClass: 'article-cards-slider-pagination__dot--active',
			clickable: true,
		},

	});
};

export default sliderMain;
