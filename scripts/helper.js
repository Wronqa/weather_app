const template = document.querySelector('#forecast__template');
const errorBox = document.querySelector('.form__error');

//Function to show error

const showError = (errorText) => {
	errorBox.textContent = errorText;
};

//Function to show data

const showData = (data) => {
	const {
		stacja: city,
		cisnienie: pressure,
		data_pomiaru: date,
		suma_opadu: precipitation,
		temperatura: temperature,
	} = data;

	if (template) {
		precipitation >= 2
			? (template.content.querySelector('.box__image').src =
					'./assets/rainy.png')
			: (template.content.querySelector('.box__image').src =
					'./assets/sunny.png');

		template.content.querySelector('#localisation').textContent = city;
		template.content.querySelector('#pressure').textContent = pressure;
		template.content.querySelector('#date').textContent = date;
		template.content.querySelector('#precipitation').textContent =
			precipitation;
		template.content.querySelector('#temperature').innerHTML =
			temperature.concat('&deg;C');

		const clone = template.content.cloneNode(true);

		if (forecastBox) {
			forecastBox.textContent = '';
			forecastBox.appendChild(clone);
		}
	}
};
