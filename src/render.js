const nameEl = document.querySelector('.city-name');
const descriptionEl = document.querySelector('.weather-description');
const iconEl = document.querySelector('.icon');
const temperatureEl = document.querySelector('.temperature');
const windEl = document.querySelector('.wind-data');
const pressureEl = document.querySelector('.pressure-data');
const feelEl = document.querySelector('.feel-data');
const humidityEl = document.querySelector('.humidity-data');

export default function renderInfo(data) {
  iconEl.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

  nameEl.textContent = data.name;
  descriptionEl.textContent = data.description;
  humidityEl.textContent = `${data.humidity} %`;
  pressureEl.textContent = `${data.pressure} hPa`;

  temperatureEl.textContent = data.temp;
  windEl.textContent = data.humidity;
  feelEl.textContent = data.feels;
}
