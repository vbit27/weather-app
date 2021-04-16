const inputEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');

function getWeather(e) {
  e.preventDefault();
  const name = inputEl.value;

  if (name) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=06390dd87d5264ce0e550a12e2f79b20`,
      {
        mode: 'cors',
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.cod && resp.cod === '404') {
          throw Error(resp.message);
        }
        console.log(resp);
        return resp;
      })
      .then((resp) => filterWeatherData(resp))
      .catch((err) => {
        console.log(err);
      });
  } else alert('Put a valid city name');
}

function filterWeatherData(data) {
  console.log({
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  });

  return {
    name: data.name,
    description: data.weather[0].description,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
}

searchBtn.addEventListener('click', (e) => {
  getWeather(e);
});
