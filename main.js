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

function getWeather(e) {
  e.preventDefault();
  const name = inputEl.value;

  if (name) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=06390dd87d5264ce0e550a12e2f79b20`,
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
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  });

  const weatherData = {
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  };

  (0,_render__WEBPACK_IMPORTED_MODULE_0__.default)(weatherData);
}

searchBtn.addEventListener('click', (e) => {
  getWeather(e);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixtREFBbUQsVUFBVTs7QUFFN0Q7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLDhCQUE4QixjQUFjOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05rQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxnREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XG5jb25zdCBkZXNjcmlwdGlvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKTtcbmNvbnN0IGljb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG5jb25zdCB0ZW1wZXJhdHVyZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCB3aW5kRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kYXRhJyk7XG5jb25zdCBwcmVzc3VyZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlLWRhdGEnKTtcbmNvbnN0IGZlZWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsLWRhdGEnKTtcbmNvbnN0IGh1bWlkaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktZGF0YScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJJbmZvKGRhdGEpIHtcbiAgaWNvbkVsLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYDtcblxuICBuYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gIGRlc2NyaXB0aW9uRWwudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICBodW1pZGl0eUVsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0gJWA7XG4gIHByZXNzdXJlRWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLnByZXNzdXJlfSBoUGFgO1xuXG4gIHRlbXBlcmF0dXJlRWwudGV4dENvbnRlbnQgPSBkYXRhLnRlbXA7XG4gIHdpbmRFbC50ZXh0Q29udGVudCA9IGRhdGEuaHVtaWRpdHk7XG4gIGZlZWxFbC50ZXh0Q29udGVudCA9IGRhdGEuZmVlbHM7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJJbmZvIGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgaW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5hbWUgPSBpbnB1dEVsLnZhbHVlO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mdW5pdHM9bWV0cmljJmFwcGlkPTA2MzkwZGQ4N2Q1MjY0Y2UwZTU1MGExMmUyZjc5YjIwYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgfVxuICAgIClcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIGlmIChyZXNwLmNvZCAmJiByZXNwLmNvZCA9PT0gJzQwNCcpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4gZmlsdGVyV2VhdGhlckRhdGEocmVzcCkpXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0gZWxzZSBhbGVydCgnUHV0IGEgdmFsaWQgY2l0eSBuYW1lJyk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcldlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc29sZS5sb2coe1xuICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIGljb246IGRhdGEud2VhdGhlclswXS5pY29uLFxuICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgIGZlZWxzOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICBwcmVzc3VyZTogZGF0YS5tYWluLnByZXNzdXJlLFxuICB9KTtcblxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICBmZWVsczogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgfTtcblxuICByZW5kZXJJbmZvKHdlYXRoZXJEYXRhKTtcbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZ2V0V2VhdGhlcihlKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==