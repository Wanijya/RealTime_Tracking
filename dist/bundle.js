/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/script.js":
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
/***/ (() => {

eval("const socket = io();\nif (navigator.geolocation) {\n  navigator.geolocation.watchPosition(position => {\n    const {\n      latitude,\n      longitude\n    } = position.coords;\n    socket.emit(\"send-location\", {\n      latitude,\n      longitude\n    });\n  }, error => {\n    console.log(error);\n  }, {\n    enableHighAccuracy: true,\n    timeout: 5000,\n    maximumAge: 0\n  });\n}\nconst map = L.map(\"map\").setView([0, 0], 16);\nL.tileLayer(\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n  attribution: \"Wanijya Bisen\"\n}).addTo(map);\nconst markers = {};\nsocket.on(\"receive-location\", data => {\n  const {\n    id,\n    latitude,\n    longitude\n  } = data;\n  map.setView([latitude, longitude]);\n  if (markers[id]) {\n    markers[id].setLatLng([latitude, longitude]);\n  } else {\n    markers[id] = L.marker([latitude, longitude]).addTo(map);\n  }\n});\nsocket.on(\"user-left\", id => {\n  if (markers[id]) {\n    map.removeLayer(markers[id]);\n    delete markers[id];\n  }\n});\n\n//# sourceURL=webpack://realtime_tracking/./public/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/script.js"]();
/******/ 	
/******/ })()
;