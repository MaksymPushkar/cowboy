"use strict";

document.addEventListener('click', documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
}

const mediaMax525 = window.matchMedia("(max-width: 525px)");

function handleMobileChange(e) {
	const headerNav = document.querySelector(".header__nav");
	const headerActions = document.querySelector(".header__actions");
	const headerBtn = document.querySelector(".header__btn");

	if (!headerNav || !headerActions || !headerBtn) return

	if (e.matches) {
		headerNav.insertAdjacentElement("beforeend", headerBtn)
	} else {
		headerActions.insertAdjacentElement("afterbegin", headerBtn)
	}
}

mediaMax525.addEventListener("change", handleMobileChange)

handleMobileChange(mediaMax525)