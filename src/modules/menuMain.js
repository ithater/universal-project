const menuMain = () => {
	const menuBtn = document.querySelector('.header .burger');
  const headerNavbar = document.querySelector('.header-navbar');

	const open = () => {
		headerNavbar.classList.toggle('header-navbar--mobile-visible');
	};

	menuBtn.addEventListener('click', open);
};

export default menuMain;
