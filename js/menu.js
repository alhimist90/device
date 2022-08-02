const catalogLink = document.querySelector('.catalog-link');
const popupCatalogMenu = document.querySelector('.popup-catalog-menu-wrapper');

catalogLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupCatalogMenu.classList.toggle('modal-show');
});

// фокус поиска 

const searchElement = document.querySelector('.search');
const searchWrapperElement = document.querySelector('.wrapper-search');
const buttonSearch = document.querySelector('.button-search');

searchElement.onfocus = () => {
	searchWrapperElement.classList.add('wrapper-search--focus');
	buttonSearch.classList.add('button-search--focus');
};

searchElement.onblur = () => {
	searchWrapperElement.classList.remove('wrapper-search--focus');
	buttonSearch.classList.remove('button-search--focus');
};