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
        return resp;
      })
      .then((resp) => ({
        name,
        description: resp.weather[0].description,
        temp: resp.main.temp,
        feels: resp.main.feels_like,
        humidity: resp.main.humidity,
        wind: resp.wind.speed,
      }))
      .catch((err) => {
        console.log(err);
      });
  } else alert('Put a valid city name');
}

searchBtn.addEventListener('click', (e) => {
  getWeather(e);
});
