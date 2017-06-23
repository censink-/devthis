/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var createDomElement = __webpack_require__(1);

	var ApiKey = "99e9557bcd56aefa42b585d87bf3f359";
	// function UserAction() {
	//     var xhttp = new XMLHttpRequest();
	//     xhttp.open("GET", "https://api.themoviedb.org/3/person/73457?api_key=99e9557bcd56aefa42b585d87bf3f359&language=en-US", false);
	//     xhttp.send();
	//     let response = JSON.parse(xhttp.responseText);
	// }

	var response = void 0;

	function UserAction() {
		console.log("UserAction");
		/*let xhr = new XMLHttpRequest();
	 xhr.open("GET", "http://172.19.2.59/api/CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet/lights", true);
	 xhr.setRequestHeader("Content-type", "application/json");
	 xhr.onload = function (e) {
	 	console.log("Gotem");
	 	if (xhr.readyState === 4) {
	 		if (xhr.status === 200) {
	 			response = JSON.parse(xhr.responseText);
	 			console.log(response)
	 		} else {
	 			console.error(xhr.statusText);
	 		}
	 	}
	 	else
	 	{
	 		console.log("Nah");
	 	}
	 };
	 xhr.onerror = function (e) {
	 	console.error(xhr.statusText);
	 };
	 xhr.send(null);*/

		var request = new Request('http://172.19.2.59/api/CG1-ThGZYP4VvLrOHD5cg7CYTY-sMVfHKJ2CuEet/lights', {
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});

		fetch(request).then(function (response) {
			console.log("Gotem");
			console.log(response.json());
		}).catch(function (err) {
			console.log("Fetch failed");
		});
	}

	function DoLog() {
		console.log(response);
	}

	var div = createDomElement({
		tagName: 'p',
		attributes: {
			class: 'container',
			id: 'cuck'
		},
		content: 'Skrt'
	});

	div.addEventListener("click", DoLog);

	var placeholder = document.getElementById('body');
	placeholder.appendChild(div);

	UserAction();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURvbUVsZW1lbnQiLCJyZXF1aXJlIiwiQXBpS2V5IiwicmVzcG9uc2UiLCJVc2VyQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJSZXF1ZXN0IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJEb0xvZyIsImRpdiIsInRhZ05hbWUiLCJhdHRyaWJ1dGVzIiwiY2xhc3MiLCJpZCIsImNvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxhY2Vob2xkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsbUJBQW1CQyxRQUFRLGNBQVIsQ0FBdkI7O0FBRUEsSUFBTUMsU0FBUyxrQ0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxpQkFBSjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQ3JCQyxTQUFRQyxHQUFSLENBQVksWUFBWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxLQUFJQyxVQUFVLElBQUlDLE9BQUosQ0FBWSx3RUFBWixFQUFzRjtBQUNuR0MsV0FBUyxJQUFJQyxPQUFKLENBQVk7QUFDcEIsbUJBQWdCO0FBREksR0FBWjtBQUQwRixFQUF0RixDQUFkOztBQU1BQyxPQUFNSixPQUFOLEVBQWVLLElBQWYsQ0FBb0IsVUFBU1QsUUFBVCxFQUFtQjtBQUN0Q0UsVUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUQsVUFBUUMsR0FBUixDQUFZSCxTQUFTVSxJQUFULEVBQVo7QUFDQSxFQUhELEVBR0dDLEtBSEgsQ0FHUyxVQUFTQyxHQUFULEVBQWM7QUFDdEJWLFVBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsRUFMRDtBQU1BOztBQUVELFNBQVNVLEtBQVQsR0FDQTtBQUNDWCxTQUFRQyxHQUFSLENBQVlILFFBQVo7QUFDQTs7QUFHRCxJQUFJYyxNQUFNakIsaUJBQWlCO0FBQzFCa0IsVUFBUyxHQURpQjtBQUUxQkMsYUFBWTtBQUNYQyxTQUFPLFdBREk7QUFFWEMsTUFBSTtBQUZPLEVBRmM7QUFNMUJDLFVBQVM7QUFOaUIsQ0FBakIsQ0FBVjs7QUFTQUwsSUFBSU0sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEJQLEtBQTlCOztBQUlBLElBQUlRLGNBQWNDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQUYsWUFBWUcsV0FBWixDQUF3QlYsR0FBeEI7O0FBRUFiIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NlbnNpbmsvRG9jdW1lbnRzL1BocHN0b3JtUHJvamVjdHMvRkVEIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNyZWF0ZURvbUVsZW1lbnQgPSByZXF1aXJlKCcuL2RvbUVsZW1lbnQnKTtcblxuY29uc3QgQXBpS2V5ID0gXCI5OWU5NTU3YmNkNTZhZWZhNDJiNTg1ZDg3YmYzZjM1OVwiO1xuLy8gZnVuY3Rpb24gVXNlckFjdGlvbigpIHtcbi8vICAgICB2YXIgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbi8vICAgICB4aHR0cC5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9wZXJzb24vNzM0NTc/YXBpX2tleT05OWU5NTU3YmNkNTZhZWZhNDJiNTg1ZDg3YmYzZjM1OSZsYW5ndWFnZT1lbi1VU1wiLCBmYWxzZSk7XG4vLyAgICAgeGh0dHAuc2VuZCgpO1xuLy8gICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGh0dHAucmVzcG9uc2VUZXh0KTtcbi8vIH1cblxubGV0IHJlc3BvbnNlO1xuXG5mdW5jdGlvbiBVc2VyQWN0aW9uKCkge1xuXHRjb25zb2xlLmxvZyhcIlVzZXJBY3Rpb25cIik7XG5cdC8qbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4aHIub3BlbihcIkdFVFwiLCBcImh0dHA6Ly8xNzIuMTkuMi41OS9hcGkvQ0cxLVRoR1pZUDRWdkxyT0hENWNnN0NZVFktc01WZkhLSjJDdUVldC9saWdodHNcIiwgdHJ1ZSk7XG5cdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJHb3RlbVwiKTtcblx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1c1RleHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coXCJOYWhcIik7XG5cdFx0fVxuXHR9O1xuXHR4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcih4aHIuc3RhdHVzVGV4dCk7XG5cdH07XG5cdHhoci5zZW5kKG51bGwpOyovXG5cblx0dmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnaHR0cDovLzE3Mi4xOS4yLjU5L2FwaS9DRzEtVGhHWllQNFZ2THJPSEQ1Y2c3Q1lUWS1zTVZmSEtKMkN1RWV0L2xpZ2h0cycsIHtcblx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSlcblx0fSk7XG5cblx0ZmV0Y2gocmVxdWVzdCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdGNvbnNvbGUubG9nKFwiR290ZW1cIik7XG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcblx0fSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coXCJGZXRjaCBmYWlsZWRcIik7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBEb0xvZygpXG57XG5cdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbn1cblxuXG5sZXQgZGl2ID0gY3JlYXRlRG9tRWxlbWVudCh7XG5cdHRhZ05hbWU6ICdwJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGNsYXNzOiAnY29udGFpbmVyJyxcblx0XHRpZDogJ2N1Y2snXG5cdH0sXG5cdGNvbnRlbnQ6ICdTa3J0J1xufSk7XG5cbmRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRG9Mb2cpO1xuXG5cblxubGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcbnBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cblVzZXJBY3Rpb24oKTsiXX0=

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	function createDomElement(properties) {
		//Create the element
		var domElement = document.createElement(properties.tagName);

		//Loop through the attributes to set them on the element
		var attributes = properties.attributes;
		for (var prop in attributes) {
			domElement.setAttribute(prop, attributes[prop]);
		}

		//If any content, set the inner HTML
		if (properties.content) {
			domElement.innerHTML = properties.content;
		}

		console.log("Created DOM Element");

		//Return to use in other functions
		return domElement;
	}

	module.exports = createDomElement;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9kb21FbGVtZW50LmpzIl0sIm5hbWVzIjpbImNyZWF0ZURvbUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJhdHRyaWJ1dGVzIiwicHJvcCIsInNldEF0dHJpYnV0ZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxnQkFBVCxDQUEwQkMsVUFBMUIsRUFDQTtBQUNDO0FBQ0EsS0FBSUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QkgsV0FBV0ksT0FBbEMsQ0FBakI7O0FBRUE7QUFDQSxLQUFJQyxhQUFhTCxXQUFXSyxVQUE1QjtBQUNBLE1BQUssSUFBSUMsSUFBVCxJQUFpQkQsVUFBakIsRUFBNkI7QUFDNUJKLGFBQVdNLFlBQVgsQ0FBd0JELElBQXhCLEVBQThCRCxXQUFXQyxJQUFYLENBQTlCO0FBQ0E7O0FBRUQ7QUFDQSxLQUFJTixXQUFXUSxPQUFmLEVBQXdCO0FBQ3ZCUCxhQUFXUSxTQUFYLEdBQXVCVCxXQUFXUSxPQUFsQztBQUNBOztBQUVERSxTQUFRQyxHQUFSLENBQVkscUJBQVo7O0FBRUE7QUFDQSxRQUFPVixVQUFQO0FBQ0E7O0FBRURXLE9BQU9DLE9BQVAsR0FBaUJkLGdCQUFqQiIsImZpbGUiOiJkb21FbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jZW5zaW5rL0RvY3VtZW50cy9QaHBzdG9ybVByb2plY3RzL0ZFRCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQocHJvcGVydGllcylcbntcblx0Ly9DcmVhdGUgdGhlIGVsZW1lbnRcblx0bGV0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHByb3BlcnRpZXMudGFnTmFtZSk7XG5cblx0Ly9Mb29wIHRocm91Z2ggdGhlIGF0dHJpYnV0ZXMgdG8gc2V0IHRoZW0gb24gdGhlIGVsZW1lbnRcblx0bGV0IGF0dHJpYnV0ZXMgPSBwcm9wZXJ0aWVzLmF0dHJpYnV0ZXM7XG5cdGZvciAobGV0IHByb3AgaW4gYXR0cmlidXRlcykge1xuXHRcdGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuXHR9XG5cblx0Ly9JZiBhbnkgY29udGVudCwgc2V0IHRoZSBpbm5lciBIVE1MXG5cdGlmIChwcm9wZXJ0aWVzLmNvbnRlbnQpIHtcblx0XHRkb21FbGVtZW50LmlubmVySFRNTCA9IHByb3BlcnRpZXMuY29udGVudDtcblx0fVxuXG5cdGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBET00gRWxlbWVudFwiKTtcblxuXHQvL1JldHVybiB0byB1c2UgaW4gb3RoZXIgZnVuY3Rpb25zXG5cdHJldHVybiBkb21FbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURvbUVsZW1lbnQ7Il19

/***/ })
/******/ ]);