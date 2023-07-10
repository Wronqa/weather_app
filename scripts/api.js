const apiUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station/';

const getForecast = async (city) => {
	try {
		const response = await fetch(apiUrl.concat(city));
		const data = await response.json();

		if (data.status === false) throw new Error(data.message);

		return data;
	} catch (err) {
		console.log(err.message);
	}
};
