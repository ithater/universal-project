// import Swiper styles
import 'swiper/swiper-bundle.css';
// import Swiper JS
import Swiper, { Navigation, Keyboard } from 'swiper';

const sliderArticle = () => {
	Swiper.use([Navigation, Keyboard]);
	// eslint-disable-next-line no-unused-vars
	const mySwiper = new Swiper('.article-slider__container', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.article-slider-button--next',
			prevEl: '.article-slider-button--prev',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: false,
		},
	});
};

export default sliderArticle;
