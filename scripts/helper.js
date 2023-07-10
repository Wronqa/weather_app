const showError = (errorText) => {
	document.querySelector(
		'.result'
	).innerHTML = `<span class="error"> ${errorText} </span>`;
};

const showData = (data) => {
	document.querySelector('.result').innerHTML = `
	</br>
	<span> Data pomiaru: ${data.data_pomiaru} </span> <br/>
	<span> Temperatura: ${data.temperatura} </span> <br/>
	<span> Suma opadu: ${data.suma_opadu} </span> <br/>
	<span> ciśnienie: ${data.cisnienie} </span> <br/>
	`;
};
