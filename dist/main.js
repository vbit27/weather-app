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
const metricBtn = document.querySelector('.metric');
const imperialBtn = document.querySelector('.imperial');

// Render Information
function renderInfo(data, unit) {
  iconEl.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  nameEl.textContent = data.name;
  descriptionEl.textContent = data.description;
  humidityEl.textContent = `${data.humidity} %`;
  humidityEl.style.fontWeight = '200';
  pressureEl.textContent = `${data.pressure} hPa`;
  pressureEl.style.fontWeight = '200';

  if (unit === 'metric') {
    temperatureEl.textContent = `${data.temp} ${String.fromCharCode(176)}C`;
    windEl.textContent = `${data.humidity} km/h`;
    windEl.style.fontWeight = '200';
    feelEl.textContent = `${data.feels} ${String.fromCharCode(176)}C`;
    feelEl.style.fontWeight = '200';
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
  } else {
    temperatureEl.textContent = `${data.temp} ${String.fromCharCode(176)}F`;
    windEl.textContent = `${data.humidity} m/h`;
    windEl.style.fontWeight = '200';
    feelEl.textContent = `${data.feels} ${String.fromCharCode(176)}F`;
    feelEl.style.fontWeight = '200';
    metricBtn.classList.remove('active');
    imperialBtn.classList.add('active');
  }
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

// Select only the needed information
function filterWeatherData(data) {
  return {
    id: data.weather[0].id,
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: Math.round(data.main.temp),
    feels: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  };
}

// Fetch information
function fetchWeather(name, unit) {
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
      return resp;
    })
    .then((resp) => {
      const selectedCityWeather = filterWeatherData(resp);
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.default)(selectedCityWeather, unit);
    })
    .catch((err) => {
      alert(err);
    });
}

// Add functionality to buttons
const setWeather = ((e) => {
  let unit = 'metric';
  let name = 'berlin';

  const search = (e) => {
    if (inputEl.value) {
      e.preventDefault();
      name = inputEl.value;
      fetchWeather(name, unit);
    } else alert('Put a valid city name');
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

// Initialize
fetchWeather('berlin', 'weather');

searchBtn.addEventListener('click', (e) => {
  setWeather.search(e);
});

imperialBtn.addEventListener('click', setWeather.switchToImperial);
metricBtn.addEventListener('click', setWeather.switchToMetric);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2U7QUFDZixtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQSw4QkFBOEIsY0FBYztBQUM1Qzs7QUFFQTtBQUNBLG1DQUFtQyxVQUFVLEdBQUcseUJBQXlCO0FBQ3pFLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0EsNEJBQTRCLFdBQVcsR0FBRyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1DQUFtQyxVQUFVLEdBQUcseUJBQXlCO0FBQ3pFLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0EsNEJBQTRCLFdBQVcsR0FBRyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSyxTQUFTLEtBQUs7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU0sZ0RBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHdpbmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRhdGEnKTtcbmNvbnN0IHByZXNzdXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUtZGF0YScpO1xuY29uc3QgZmVlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWwtZGF0YScpO1xuY29uc3QgaHVtaWRpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1kYXRhJyk7XG5jb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0cmljJyk7XG5jb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBlcmlhbCcpO1xuXG4vLyBSZW5kZXIgSW5mb3JtYXRpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YSwgdW5pdCkge1xuICBpY29uRWwuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUAyeC5wbmdgO1xuICBuYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGRlc2NyaXB0aW9uRWwudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICBodW1pZGl0eUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gJWA7XG4gIGh1bWlkaXR5RWwuc3R5bGUuZm9udFdlaWdodCA9ICcyMDAnO1xuICBwcmVzc3VyZUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5wcmVzc3VyZX0gaFBhYDtcbiAgcHJlc3N1cmVFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzIwMCc7XG5cbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH0gJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XG4gICAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0ga20vaGA7XG4gICAgd2luZEVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnMjAwJztcbiAgICBmZWVsRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzfSAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcbiAgICBmZWVsRWwuc3R5bGUuZm9udFdlaWdodCA9ICcyMDAnO1xuICAgIG1ldHJpY0J0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBpbXBlcmlhbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfSAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcbiAgICB3aW5kRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSBtL2hgO1xuICAgIHdpbmRFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzIwMCc7XG4gICAgZmVlbEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mZWVsc30gJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XG4gICAgZmVlbEVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnMjAwJztcbiAgICBtZXRyaWNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgaW1wZXJpYWxCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckluZm8gZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCBpbnB1dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktbmFtZScpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTtcbmNvbnN0IG1ldHJpY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRyaWMnKTtcbmNvbnN0IGltcGVyaWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcGVyaWFsJyk7XG5cbi8vIFNlbGVjdCBvbmx5IHRoZSBuZWVkZWQgaW5mb3JtYXRpb25cbmZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogZGF0YS53ZWF0aGVyWzBdLmlkLFxuICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIGljb246IGRhdGEud2VhdGhlclswXS5pY29uLFxuICAgIHRlbXA6IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApLFxuICAgIGZlZWxzOiBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICBwcmVzc3VyZTogZGF0YS5tYWluLnByZXNzdXJlLFxuICB9O1xufVxuXG4vLyBGZXRjaCBpbmZvcm1hdGlvblxuZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpIHtcbiAgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25hbWV9JnVuaXRzPSR7dW5pdH0mYXBwaWQ9MDYzOTBkZDg3ZDUyNjRjZTBlNTUwYTEyZTJmNzliMjBgLFxuICAgIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwLmNvZCAmJiByZXNwLmNvZCA9PT0gJzQwNCcpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcC5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwO1xuICAgIH0pXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2l0eVdlYXRoZXIgPSBmaWx0ZXJXZWF0aGVyRGF0YShyZXNwKTtcbiAgICAgIHJlbmRlckluZm8oc2VsZWN0ZWRDaXR5V2VhdGhlciwgdW5pdCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgYWxlcnQoZXJyKTtcbiAgICB9KTtcbn1cblxuLy8gQWRkIGZ1bmN0aW9uYWxpdHkgdG8gYnV0dG9uc1xuY29uc3Qgc2V0V2VhdGhlciA9ICgoZSkgPT4ge1xuICBsZXQgdW5pdCA9ICdtZXRyaWMnO1xuICBsZXQgbmFtZSA9ICdiZXJsaW4nO1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlKSA9PiB7XG4gICAgaWYgKGlucHV0RWwudmFsdWUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG5hbWUgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICAgIH0gZWxzZSBhbGVydCgnUHV0IGEgdmFsaWQgY2l0eSBuYW1lJyk7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVG9NZXRyaWMgPSAoKSA9PiB7XG4gICAgdW5pdCA9ICdtZXRyaWMnO1xuICAgIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUb0ltcGVyaWFsID0gKCkgPT4ge1xuICAgIHVuaXQgPSAnaW1wZXJpYWwnO1xuICAgIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaCxcbiAgICBzd2l0Y2hUb01ldHJpYyxcbiAgICBzd2l0Y2hUb0ltcGVyaWFsLFxuICB9O1xufSkoKTtcblxuLy8gSW5pdGlhbGl6ZVxuZmV0Y2hXZWF0aGVyKCdiZXJsaW4nLCAnd2VhdGhlcicpO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBzZXRXZWF0aGVyLnNlYXJjaChlKTtcbn0pO1xuXG5pbXBlcmlhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFdlYXRoZXIuc3dpdGNoVG9JbXBlcmlhbCk7XG5tZXRyaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRXZWF0aGVyLnN3aXRjaFRvTWV0cmljKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=