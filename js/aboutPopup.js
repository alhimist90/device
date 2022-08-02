const aboutLink = document.querySelector('.contacts-button');
const popupAbout = document.querySelector('.modal-write');
const closeAboutButton = popupAbout.querySelector('.modal-close');
const nameName = popupAbout.querySelector('.name-user');

aboutLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupAbout.classList.add('modal-show');
	nameName.focus();
});

closeAboutButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupAbout.classList.remove('modal-show');
});