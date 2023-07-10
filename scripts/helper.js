const showError = (errorText) => {
	document.querySelector(
		'form'
	).innerHTML += `<span class="form__error"> ${errorText} </span>`;
};

const showData = (data) => {
	const template = document.querySelector('#forecast__template');
	template.content.querySelector('#localisation').textContent = data.stacja;
	template.content.querySelector('#pressure').textContent = data.cisnienie;
	template.content.querySelector('#date').textContent = data.data_pomiaru;
	template.content.querySelector('#precipitation').textContent =
		data.suma_opadu;
	template.content.querySelector('#temperature').innerHTML =
		data.temperatura.concat('&deg;C');

	if (template) {
		const clone = template.content.cloneNode(true);

		document.querySelector('.forecast__content').textContent = '';
		document.querySelector('.forecast__content').appendChild(clone);
	}
};
