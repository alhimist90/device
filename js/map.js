const mapLink = document.querySelector('.contacts-map');
const popupMap = document.querySelector('.modal-map');
const closeMap = popupMap.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.add('modal-show');
});

closeMap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupMap.classList.remove('modal-show');
});
