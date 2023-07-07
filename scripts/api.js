const apiUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station/';

const getForecast = async (city) => {
	const response = await fetch(apiUrl.concat(city));
	const data = await response.json();
	return data;
};
