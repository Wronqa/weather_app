const cityInput = document.querySelector('select');
const searchBtn = document.querySelector('button');

console.log('test');

if (searchBtn) {
	searchBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const city = cityInput.value;

		getForecast(city).then((data) => {
			console.log(data);
			document.querySelector('.result').innerHTML = `
        Data pomiaru: ${data.godzina_pomiaru} </br>
        Temperatura: ${data.temperatura}  </br>
        Suma opadu: ${data.suma_opadu}  </br>
        Ciśnienie: ${data.cisnienie}  </br>

      `;
		});
	});
}
