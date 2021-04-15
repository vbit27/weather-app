const inputEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');

async function getWeather(e) {
  e.preventDefault();
  const name = inputEl.value;

  const info = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=06390dd87d5264ce0e550a12e2f79b20`,
    {
      mode: 'cors',
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .catch((err) => console.warn(err));

  /*
  console.log(info);
  console.log({
    name,
    description: info.weather[0].description,
    icon: info.weather[0].icon,
    temp: info.main.temp,
    feels: info.main.feels_like,
    humidity: info.main.humidity,
    wind: info.wind.speed,
  });

  */

  return {
    name,
    description: info.weather[0].description,
    temp: info.main.temp,
    feels: info.main.feels_like,
    humidity: info.main.humidity,
    wind: info.wind.speed,
  };
}

searchBtn.addEventListener('click', (e) => {
  getWeather(e);
});
