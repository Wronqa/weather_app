//Load all nessesary elements

const cityInput = document.querySelector('select');
const searchBtn = document.querySelector('button');

//Check if exist recent searching data

window.onload = () => {
	const recentData = localStorage.getItem('weatherData');

	recentData && showData(JSON.parse(recentData));
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
			localStorage.setItem('weatherData', JSON.stringify(data));
			showData(data);
		}
	});
}
