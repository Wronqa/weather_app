//Load all nessesary elements

const cityInput = document.querySelector('select');
const searchBtn = document.querySelector('button');
const forecastBox = document.querySelector('.forecast__content');

//Check if exist recent searching data

window.onload = () => {
	const recentData = localStorage.getItem('weatherData');

	recentData
		? showData(JSON.parse(recentData))
		: (forecastBox.textContent = 'Brak ostatnich wyszukiwań');
};

//Detect click on button

if (searchBtn) {
	searchBtn.addEventListener('click', async (e) => {
		e.preventDefault();

		const city = cityInput.value;

		if (!city.trim().length) {
			return showError('Wybierz miasto');
		}

		const data = await getForecast(city);

		if (data) {
			showError('');
			localStorage.setItem('weatherData', JSON.stringify(data));
			showData(data);
		}
	});
}
