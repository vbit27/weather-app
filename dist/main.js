/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpO1xuXG5mdW5jdGlvbiBnZXRXZWF0aGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gaW5wdXRFbC52YWx1ZTtcblxuICBjb25zdCBpbmZvID0gZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25hbWV9JmFwcGlkPTA2MzkwZGQ4N2Q1MjY0Y2UwZTU1MGExMmUyZjc5YjIwYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApXG4gICAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdwaycpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cbiAgaWYgKGluZm8uY29kID09PSAnNDA0Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnZXInKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbjogaW5mby53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIHRlbXA6IGluZm8ubWFpbi50ZW1wLFxuICAgIGZlZWxzOiBpbmZvLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogaW5mby5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGluZm8ud2luZC5zcGVlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGdldFdlYXRoZXIoZSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=