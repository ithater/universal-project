const menuMain = () => {
	const menuBtn = document.querySelector('.header .burger');
	const headerNavbar = document.querySelector('.header-navbar');
	const headerNavbarSearch = headerNavbar.querySelector('.header-navbar__search');

	const open = () => {
		headerNavbar.classList.toggle('header-navbar--mobile-visible');
		headerNavbarSearch.classList.toggle('header-navbar__search--mobile-visible');
	};

	menuBtn.addEventListener('click', open);
};

export default menuMain;
