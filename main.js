/******/ (() => {
  // webpackBootstrap
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

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZScpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTtcblxuZnVuY3Rpb24gZ2V0V2VhdGhlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IGlucHV0RWwudmFsdWU7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuYW1lfSZhcHBpZD0wNjM5MGRkODdkNTI2NGNlMGU1NTBhMTJlMmY3OWIyMGAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBpZiAocmVzcC5jb2QgJiYgcmVzcC5jb2QgPT09ICc0MDQnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcC5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IGZpbHRlcldlYXRoZXJEYXRhKHJlc3ApKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9IGVsc2UgYWxlcnQoJ1B1dCBhIHZhbGlkIGNpdHkgbmFtZScpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKHtcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICBmZWVsczogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgZmVlbHM6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICB9O1xufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBnZXRXZWF0aGVyKGUpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
