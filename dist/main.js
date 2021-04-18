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
  iconEl.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
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
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=${unit}&appid=06390dd87d5264ce0e550a12e2f79b20`,
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
fetchWeather('berlin', 'metric');

searchBtn.addEventListener('click', (e) => {
  setWeather.search(e);
});

imperialBtn.addEventListener('click', setWeather.switchToImperial);
metricBtn.addEventListener('click', setWeather.switchToMetric);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2U7QUFDZixvREFBb0QsVUFBVTtBQUM5RDtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQSw4QkFBOEIsY0FBYztBQUM1Qzs7QUFFQTtBQUNBLG1DQUFtQyxVQUFVLEdBQUcseUJBQXlCO0FBQ3pFLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0EsNEJBQTRCLFdBQVcsR0FBRyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1DQUFtQyxVQUFVLEdBQUcseUJBQXlCO0FBQ3pFLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0EsNEJBQTRCLFdBQVcsR0FBRyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsS0FBSyxTQUFTLEtBQUs7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU0sZ0RBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcbmNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHdpbmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRhdGEnKTtcbmNvbnN0IHByZXNzdXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUtZGF0YScpO1xuY29uc3QgZmVlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWwtZGF0YScpO1xuY29uc3QgaHVtaWRpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1kYXRhJyk7XG5jb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0cmljJyk7XG5jb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBlcmlhbCcpO1xuXG4vLyBSZW5kZXIgSW5mb3JtYXRpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YSwgdW5pdCkge1xuICBpY29uRWwuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYDtcbiAgbmFtZUVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICBodW1pZGl0eUVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnMjAwJztcbiAgcHJlc3N1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XG4gIHByZXNzdXJlRWwuc3R5bGUuZm9udFdlaWdodCA9ICcyMDAnO1xuXG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHRlbXBlcmF0dXJlRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9ICR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xuICAgIHdpbmRFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9IGttL2hgO1xuICAgIHdpbmRFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzIwMCc7XG4gICAgZmVlbEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mZWVsc30gJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XG4gICAgZmVlbEVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnMjAwJztcbiAgICBtZXRyaWNCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaW1wZXJpYWxCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH0gJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XG4gICAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gbS9oYDtcbiAgICB3aW5kRWwuc3R5bGUuZm9udFdlaWdodCA9ICcyMDAnO1xuICAgIGZlZWxFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuZmVlbHN9ICR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUZgO1xuICAgIGZlZWxFbC5zdHlsZS5mb250V2VpZ2h0ID0gJzIwMCc7XG4gICAgbWV0cmljQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGltcGVyaWFsQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJJbmZvIGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7XG5jb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0cmljJyk7XG5jb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBlcmlhbCcpO1xuXG4vLyBTZWxlY3Qgb25seSB0aGUgbmVlZGVkIGluZm9ybWF0aW9uXG5mdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YShkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGRhdGEud2VhdGhlclswXS5pZCxcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgICB0ZW1wOiBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKSxcbiAgICBmZWVsczogTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSksXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgfTtcbn1cblxuLy8gRmV0Y2ggaW5mb3JtYXRpb25cbmZ1bmN0aW9uIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KSB7XG4gIGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mdW5pdHM9JHt1bml0fSZhcHBpZD0wNjM5MGRkODdkNTI2NGNlMGU1NTBhMTJlMmY3OWIyMGAsXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgaWYgKHJlc3AuY29kICYmIHJlc3AuY29kID09PSAnNDA0Jykge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3A7XG4gICAgfSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDaXR5V2VhdGhlciA9IGZpbHRlcldlYXRoZXJEYXRhKHJlc3ApO1xuICAgICAgcmVuZGVySW5mbyhzZWxlY3RlZENpdHlXZWF0aGVyLCB1bml0KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH0pO1xufVxuXG4vLyBBZGQgZnVuY3Rpb25hbGl0eSB0byBidXR0b25zXG5jb25zdCBzZXRXZWF0aGVyID0gKChlKSA9PiB7XG4gIGxldCB1bml0ID0gJ21ldHJpYyc7XG4gIGxldCBuYW1lID0gJ2Jlcmxpbic7XG5cbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICBpZiAoaW5wdXRFbC52YWx1ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmFtZSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBmZXRjaFdlYXRoZXIobmFtZSwgdW5pdCk7XG4gICAgfSBlbHNlIGFsZXJ0KCdQdXQgYSB2YWxpZCBjaXR5IG5hbWUnKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUb01ldHJpYyA9ICgpID0+IHtcbiAgICB1bml0ID0gJ21ldHJpYyc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFRvSW1wZXJpYWwgPSAoKSA9PiB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoLFxuICAgIHN3aXRjaFRvTWV0cmljLFxuICAgIHN3aXRjaFRvSW1wZXJpYWwsXG4gIH07XG59KSgpO1xuXG4vLyBJbml0aWFsaXplXG5mZXRjaFdlYXRoZXIoJ2JlcmxpbicsICdtZXRyaWMnKTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgc2V0V2VhdGhlci5zZWFyY2goZSk7XG59KTtcblxuaW1wZXJpYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRXZWF0aGVyLnN3aXRjaFRvSW1wZXJpYWwpO1xubWV0cmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0V2VhdGhlci5zd2l0Y2hUb01ldHJpYyk7XG4iXSwic291cmNlUm9vdCI6IiJ9