const apiUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station/';

//Api call to get forecast for current city with error handling

const getForecast = async (city) => {
	try {
		const response = await fetch(apiUrl.concat(city));
		const data = await response.json();

		if (data.status === false) throw new Error(data.message);

		return data;
	} catch (err) {
		if (err.message) return showError(err.message);

		return showError('Błąd połączenia');
	}
};
