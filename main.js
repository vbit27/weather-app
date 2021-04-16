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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWUgPSBpbnB1dEVsLnZhbHVlO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mYXBwaWQ9MDYzOTBkZDg3ZDUyNjRjZTBlNTUwYTEyZTJmNzliMjBgLFxuICAgICAge1xuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICB9XG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgaWYgKHJlc3AuY29kICYmIHJlc3AuY29kID09PSAnNDA0Jykge1xuICAgICAgICAgIHRocm93IEVycm9yKHJlc3AubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZXNwLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHRlbXA6IHJlc3AubWFpbi50ZW1wLFxuICAgICAgICBmZWVsczogcmVzcC5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAgIGh1bWlkaXR5OiByZXNwLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmQ6IHJlc3Aud2luZC5zcGVlZCxcbiAgICAgIH0pKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgYWxlcnQoJ1B1dCBhIHZhbGlkIGNpdHkgbmFtZScpO1xufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBnZXRXZWF0aGVyKGUpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9