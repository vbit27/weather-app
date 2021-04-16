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
  console.log(data.weather[0].id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUMsOEJBQThCLGNBQWM7O0FBRTVDO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0MsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLFdBQVc7QUFDdkMsR0FBRztBQUNILG1DQUFtQyxVQUFVO0FBQzdDLDRCQUE0QixjQUFjO0FBQzFDLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCxLQUFLLFNBQVMsS0FBSztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxnREFBVTtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJJbmZvKGRhdGEsIHVuaXQpIHtcbiAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xuICBjb25zdCBkZXNjcmlwdGlvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgaWNvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuICBjb25zdCB3aW5kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kYXRhJyk7XG4gIGNvbnN0IHByZXNzdXJlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUtZGF0YScpO1xuICBjb25zdCBmZWVsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbC1kYXRhJyk7XG4gIGNvbnN0IGh1bWlkaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZGF0YScpO1xuXG4gIGljb25FbC5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG4gIG5hbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgZGVzY3JpcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gIGh1bWlkaXR5RWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSAlYDtcbiAgcHJlc3N1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XG5cbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH0gQ2A7XG4gICAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0ga20vaGA7XG4gICAgZmVlbEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mZWVsc30gQ2A7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVFbC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH0gRmA7XG4gICAgd2luZEVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gbS9oYDtcbiAgICBmZWVsRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzfSBGYDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVySW5mbyBmcm9tICcuL3JlbmRlcic7XG5cbmNvbnN0IGlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ0bicpO1xuY29uc3QgbWV0cmljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ldHJpYycpO1xuY29uc3QgaW1wZXJpYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wZXJpYWwnKTtcblxuZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhLndlYXRoZXJbMF0uaWQpO1xuICByZXR1cm4ge1xuICAgIGlkOiBkYXRhLndlYXRoZXJbMF0uaWQsXG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCksXG4gICAgZmVlbHM6IE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZldGNoV2VhdGhlcihuYW1lLCB1bml0KSB7XG4gIGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuYW1lfSZ1bml0cz0ke3VuaXR9JmFwcGlkPTA2MzkwZGQ4N2Q1MjY0Y2UwZTU1MGExMmUyZjc5YjIwYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcC5jb2QgJiYgcmVzcC5jb2QgPT09ICc0MDQnKSB7XG4gICAgICAgIHRocm93IEVycm9yKHJlc3AubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcDtcbiAgICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENpdHlXZWF0aGVyID0gZmlsdGVyV2VhdGhlckRhdGEocmVzcCk7XG4gICAgICByZW5kZXJJbmZvKHNlbGVjdGVkQ2l0eVdlYXRoZXIsIHVuaXQpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfSk7XG59XG5cbmNvbnN0IHNldFdlYXRoZXIgPSAoKGUpID0+IHtcbiAgbGV0IHVuaXQgPSAnbWV0cmljJztcbiAgbGV0IG5hbWU7XG5cbiAgY29uc3Qgc2VhcmNoID0gKGUpID0+IHtcbiAgICBpZiAoaW5wdXRFbC52YWx1ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmFtZSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBmZXRjaFdlYXRoZXIobmFtZSwgdW5pdCk7XG4gICAgfSBlbHNlIGFsZXJ0KCdQdXQgYSB2YWxpZCBjaXR5IG5hbWUnKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUb01ldHJpYyA9ICgpID0+IHtcbiAgICB1bml0ID0gJ21ldHJpYyc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIGNvbnN0IHN3aXRjaFRvSW1wZXJpYWwgPSAoKSA9PiB7XG4gICAgdW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgZmV0Y2hXZWF0aGVyKG5hbWUsIHVuaXQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoLFxuICAgIHN3aXRjaFRvTWV0cmljLFxuICAgIHN3aXRjaFRvSW1wZXJpYWwsXG4gIH07XG59KSgpO1xuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBzZXRXZWF0aGVyLnNlYXJjaChlKTtcbn0pO1xuXG5pbXBlcmlhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFdlYXRoZXIuc3dpdGNoVG9JbXBlcmlhbCk7XG5tZXRyaWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRXZWF0aGVyLnN3aXRjaFRvTWV0cmljKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=