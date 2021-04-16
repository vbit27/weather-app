/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderInfo)
/* harmony export */ });
const nameEl = document.querySelector('.city-name');
const descriptionEl = document.querySelector('.weather-description');
const iconEl = document.querySelector('.icon');
const temperatureEl = document.querySelector('.temperature');
const windEl = document.querySelector('.wind-data');
const pressureEl = document.querySelector('.pressure-data');
const feelEl = document.querySelector('.feel-data');
const humidityEl = document.querySelector('.humidity-data');

function renderInfo(data) {
  iconEl.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

  nameEl.textContent = data.name;
  descriptionEl.textContent = data.description;
  humidityEl.textContent = `${data.humidity} %`;
  pressureEl.textContent = `${data.pressure} hPa`;

  temperatureEl.textContent = data.temp;
  windEl.textContent = data.humidity;
  feelEl.textContent = data.feels;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


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
        (0,_render__WEBPACK_IMPORTED_MODULE_0__.default)(selectedCityWeather);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixtREFBbUQsVUFBVTs7QUFFN0Q7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLDhCQUE4QixjQUFjOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUssU0FBUyxLQUFLO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsZ0RBQVU7QUFDbEIsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHdpbmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRhdGEnKTtcbmNvbnN0IHByZXNzdXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUtZGF0YScpO1xuY29uc3QgZmVlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWwtZGF0YScpO1xuY29uc3QgaHVtaWRpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1kYXRhJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YSkge1xuICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUAyeC5wbmdgO1xuXG4gIG5hbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gIGh1bWlkaXR5RWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSAlYDtcbiAgcHJlc3N1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XG5cbiAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGRhdGEudGVtcDtcbiAgd2luZEVsLnRleHRDb250ZW50ID0gZGF0YS5odW1pZGl0eTtcbiAgZmVlbEVsLnRleHRDb250ZW50ID0gZGF0YS5mZWVscztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckluZm8gZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCBpbnB1dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZScpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTtcbmNvbnN0IG1ldHJpY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRyaWMnKTtcbmNvbnN0IGltcGVyaWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcGVyaWFsJyk7XG5cbmNvbnN0IHNldFdlYXRoZXIgPSAoKGUpID0+IHtcbiAgbGV0IHVuaXQgPSAnbWV0cmljJztcbiAgbGV0IG5hbWU7XG5cbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmFtZSA9IGlucHV0RWwudmFsdWU7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFRvTWV0cmljID0gKCkgPT4ge1xuICAgIHVuaXQgPSAnbWV0cmljJztcbiAgICBmZXRjaFdlYXRoZXIobmFtZSwgdW5pdCk7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVG9JbXBlcmlhbCA9ICgpID0+IHtcbiAgICB1bml0ID0gJ2ltcGVyaWFsJztcbiAgICBmZXRjaFdlYXRoZXIobmFtZSwgdW5pdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2gsXG4gICAgc3dpdGNoVG9NZXRyaWMsXG4gICAgc3dpdGNoVG9JbXBlcmlhbCxcbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KSB7XG4gIGlmIChuYW1lKSB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mdW5pdHM9JHt1bml0fSZhcHBpZD0wNjM5MGRkODdkNTI2NGNlMGU1NTBhMTJlMmY3OWIyMGAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIH1cbiAgICApXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICBpZiAocmVzcC5jb2QgJiYgcmVzcC5jb2QgPT09ICc0MDQnKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IocmVzcC5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXR5V2VhdGhlciA9IGZpbHRlcldlYXRoZXJEYXRhKHJlc3ApO1xuICAgICAgICByZW5kZXJJbmZvKHNlbGVjdGVkQ2l0eVdlYXRoZXIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIGFsZXJ0KCdQdXQgYSB2YWxpZCBjaXR5IG5hbWUnKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyh7XG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgZmVlbHM6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgZmVlbHM6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gIH07XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHNldFdlYXRoZXIuc2VhcmNoKGUpO1xufSk7XG5cbmltcGVyaWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0V2VhdGhlci5zd2l0Y2hUb0ltcGVyaWFsKTtcbm1ldHJpY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFdlYXRoZXIuc3dpdGNoVG9NZXRyaWMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==