// оживление главного слайдера

const slides = document.querySelectorAll('.products-slider-item');
const dots = document.querySelectorAll('.dot-slider');

let index = 0;

const currentSlide = (n) => {
	for (const slide of slides) {
		slide.classList.remove('slide--current');
	}
	slides[n].classList.add('slide--current');
};

const currentDot = (n) => {
	for (const dot of dots) {
		dot.classList.remove('dot-slider--current');
	}
	dots[n].classList.add('dot-slider--current');
};

const prepareCurrentSlide = (ind) => {
	currentSlide(ind);
	currentDot(ind);
};

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
});

// оживление сервисного слайдера

const serviceSlides = document.querySelectorAll('.services-item');
const servicesButtonSlider = document.querySelectorAll('.slider-services-button');

let servicesIndex = 0;

const currentSlideServices = (n) => {
	for (const slide of serviceSlides) {
		slide.classList.remove('services-item--active');
	}
	serviceSlides[n].classList.add('services-item--active');
};

const currentButton = (n) => {
	for (const button of servicesButtonSlider) {
		button.classList.remove('button-slider--active');
	}
	servicesButtonSlider[n].classList.add('button-slider--active');
};

const prepareCurrentSlideServices = (ind) => {
	currentSlideServices(ind);
	currentButton(ind);
};

servicesButtonSlider.forEach((item, indexButton) => {
	item.addEventListener('click', () => {
		servicesIndex = indexButton;
		prepareCurrentSlideServices(servicesIndex);
	})
});