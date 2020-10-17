const toUp = () => {
	const toUpBtn = document.querySelector('.to-up');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 700) toUpBtn.classList.add('to-up--visible');
		else toUpBtn.classList.remove('to-up--visible');
	});

	toUpBtn.addEventListener('click', evt => {
		evt.preventDefault();
		document.body.scrollIntoView({ block: "start", behavior: "smooth" });
	});
};

export default toUp;
