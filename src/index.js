import renderInfo from './render';

const inputEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const metricBtn = document.querySelector('.metric');
const imperialBtn = document.querySelector('.imperial');

const setWeather = ((e) => {
  let unit = 'metric';
  let name;

  const search = (e) => {
    e.preventDefault();
    name = inputEl.value;
    fetchWeather(name, unit);
  };

  const switchToMetric = () => {
    unit = 'metric';
    fetchWeather(name, unit);
  };

  const switchToImperial = () => {
    unit = 'imperial';
    fetchWeather(name, unit);
  };

  return {
    search,
    switchToMetric,
    switchToImperial,
  };
})();

function fetchWeather(name, unit) {
  if (name) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=${unit}&appid=06390dd87d5264ce0e550a12e2f79b20`,
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
      .then((resp) => {
        const selectedCityWeather = filterWeatherData(resp);
        renderInfo(selectedCityWeather);
      })
      .catch((err) => {
        alert(err);
      });
  } else alert('Put a valid city name');
}

function filterWeatherData(data) {
  console.log({
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  });

  return {
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  };
}

searchBtn.addEventListener('click', (e) => {
  setWeather.search(e);
});

imperialBtn.addEventListener('click', setWeather.switchToImperial);
metricBtn.addEventListener('click', setWeather.switchToMetric);
