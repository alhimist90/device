const form = document.querySelector('.modal-write-form');
const formInputs = document.querySelectorAll('.input-write');
const inputEmail = document.querySelector('.email-user');

const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

form.onsubmit = () => {
	const emailValue = inputEmail.value;
	const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

	formInputs.forEach(function (input) {
		if (input.value === '') {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	});

	if (emptyInputs != 0) {
		return false;
	}

	if (!validateEmail(emailValue)) {
		inputEmail.classList.add('error');
		return false;
	} else {
		inputEmail.classList.remove('error');
	}
};