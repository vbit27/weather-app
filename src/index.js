const inputEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');

function getWeather(e) {
  e.preventDefault();
  const name = inputEl.value;

  const info = fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=06390dd87d5264ce0e550a12e2f79b20`,
    {
      mode: 'cors',
    }
  )
    .then(handleErrors)
    .then(() => console.log('pk'))
    .catch((error) => console.log(error));

  if (info.cod === '404') {
    return Promise.reject('er');
  }

  return {
    name,
    description: info.weather[0].description,
    temp: info.main.temp,
    feels: info.main.feels_like,
    humidity: info.main.humidity,
    wind: info.wind.speed,
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

searchBtn.addEventListener('click', (e) => {
  getWeather(e);
});
