const cityInput = document.querySelector('select');
const searchBtn = document.querySelector('button');

if (searchBtn) {
	searchBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const city = cityInput.value;

		const data = await getForecast(city);

		console.log(data);
	});
}
