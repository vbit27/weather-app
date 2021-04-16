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
function renderInfo(data, unit) {
  const nameEl = document.querySelector('.city-name');
  const descriptionEl = document.querySelector('.weather-description');
  const iconEl = document.querySelector('.icon');
  const temperatureEl = document.querySelector('.temperature');
  const windEl = document.querySelector('.wind-data');
  const pressureEl = document.querySelector('.pressure-data');
  const feelEl = document.querySelector('.feel-data');
  const humidityEl = document.querySelector('.humidity-data');

  iconEl.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  nameEl.textContent = data.name;
  descriptionEl.textContent = data.description;
  humidityEl.textContent = `${data.humidity} %`;
  pressureEl.textContent = `${data.pressure} hPa`;

  if (unit === 'metric') {
    temperatureEl.textContent = `${data.temp} C`;
    windEl.textContent = `${data.humidity} km/h`;
    feelEl.textContent = `${data.feels} C`;
  } else {
    temperatureEl.textContent = `${data.temp} F`;
    windEl.textContent = `${data.humidity} m/h`;
    feelEl.textContent = `${data.feels} F`;
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

function filterWeatherData(data) {
  return {
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

const setWeather = ((e) => {
  let unit = 'metric';
  let name;

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

searchBtn.addEventListener('click', (e) => {
  setWeather.search(e);
});

imperialBtn.addEventListener('click', setWeather.switchToImperial);
metricBtn.addEventListener('click', setWeather.switchToMetric);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUMsOEJBQThCLGNBQWM7O0FBRTVDO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0MsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLFdBQVc7QUFDdkMsR0FBRztBQUNILG1DQUFtQyxVQUFVO0FBQzdDLDRCQUE0QixjQUFjO0FBQzFDLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELEtBQUssU0FBUyxLQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNLGdEQUFVO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YSwgdW5pdCkge1xuICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG4gIGNvbnN0IHdpbmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRhdGEnKTtcbiAgY29uc3QgcHJlc3N1cmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZS1kYXRhJyk7XG4gIGNvbnN0IGZlZWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsLWRhdGEnKTtcbiAgY29uc3QgaHVtaWRpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eS1kYXRhJyk7XG5cbiAgaWNvbkVsLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYDtcbiAgbmFtZUVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBkZXNjcmlwdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9ICVgO1xuICBwcmVzc3VyZUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5wcmVzc3VyZX0gaFBhYDtcblxuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICB0ZW1wZXJhdHVyZUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfSBDYDtcbiAgICB3aW5kRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSBrbS9oYDtcbiAgICBmZWVsRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzfSBDYDtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfSBGYDtcbiAgICB3aW5kRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSBtL2hgO1xuICAgIGZlZWxFbC50ZXh0Q29udGVudCA9IGAke2RhdGEuZmVlbHN9IEZgO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJJbmZvIGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7XG5jb25zdCBtZXRyaWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWV0cmljJyk7XG5jb25zdCBpbXBlcmlhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBlcmlhbCcpO1xuXG5mdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YShkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCksXG4gICAgZmVlbHM6IE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KSB7XG4gIGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuYW1lfSZ1bml0cz0ke3VuaXR9JmFwcGlkPTA2MzkwZGQ4N2Q1MjY0Y2UwZTU1MGExMmUyZjc5YjIwYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcC5jb2QgJiYgcmVzcC5jb2QgPT09ICc0MDQnKSB7XG4gICAgICAgIHRocm93IEVycm9yKHJlc3AubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcDtcbiAgICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENpdHlXZWF0aGVyID0gZmlsdGVyV2VhdGhlckRhdGEocmVzcCk7XG4gICAgICByZW5kZXJJbmZvKHNlbGVjdGVkQ2l0eVdlYXRoZXIsIHVuaXQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHNldFdlYXRoZXIgPSAoKGUpID0+IHtcbiAgbGV0IHVuaXQgPSAnbWV0cmljJztcbiAgbGV0IG5hbWU7XG5cbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICBpZiAoaW5wdXRFbC52YWx1ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmFtZSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBmZXRjaFdlYXRoZXIobmFtZSwgdW5pdCk7XG4gICAgfSBlbHNlIGFsZXJ0KCdQdXQgYSB2YWxpZCBjaXR5IG5hbWUnKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUb01ldHJpYyA9ICgpID0+IHtcbiAgICB1bml0ID0gJ21ldHJpYyc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFRvSW1wZXJpYWwgPSAoKSA9PiB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoLFxuICAgIHN3aXRjaFRvTWV0cmljLFxuICAgIHN3aXRjaFRvSW1wZXJpYWwsXG4gIH07XG59KSgpO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBzZXRXZWF0aGVyLnNlYXJjaChlKTtcbn0pO1xuXG5pbXBlcmlhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFdlYXRoZXIuc3dpdGNoVG9JbXBlcmlhbCk7XG5tZXRyaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRXZWF0aGVyLnN3aXRjaFRvTWV0cmljKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=