/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gaW5wdXRFbC52YWx1ZTtcblxuICBjb25zdCBpbmZvID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25hbWV9JmFwcGlkPTA2MzkwZGQ4N2Q1MjY0Y2UwZTU1MGExMmUyZjc5YjIwYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS53YXJuKGVycikpO1xuXG4gIC8qXG4gIGNvbnNvbGUubG9nKGluZm8pO1xuICBjb25zb2xlLmxvZyh7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbjogaW5mby53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIGljb246IGluZm8ud2VhdGhlclswXS5pY29uLFxuICAgIHRlbXA6IGluZm8ubWFpbi50ZW1wLFxuICAgIGZlZWxzOiBpbmZvLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogaW5mby5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGluZm8ud2luZC5zcGVlZCxcbiAgfSk7XG5cbiAgKi9cblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb246IGluZm8ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB0ZW1wOiBpbmZvLm1haW4udGVtcCxcbiAgICBmZWVsczogaW5mby5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IGluZm8ubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBpbmZvLndpbmQuc3BlZWQsXG4gIH07XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGdldFdlYXRoZXIoZSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=