/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loading-attribute-polyfill */ "./node_modules/loading-attribute-polyfill/loading-attribute-polyfill.min.js");
/* harmony import */ var loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/index.sass */ "./src/sass/index.sass");
/* harmony import */ var _modules_menuMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/menuMain */ "./src/modules/menuMain.js");
/* harmony import */ var _modules_recomendationTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/recomendationTabs */ "./src/modules/recomendationTabs.js");
/* harmony import */ var _modules_sliderMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/sliderMain */ "./src/modules/sliderMain.js");
/* harmony import */ var _modules_addBookmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/addBookmark */ "./src/modules/addBookmark.js");
// подключение lazy-load-attrubute
 // подключение normalize







Object(_modules_menuMain__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_recomendationTabs__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_sliderMain__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_addBookmark__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./src/modules/addBookmark.js":
/*!************************************!*\
  !*** ./src/modules/addBookmark.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addBookmark; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function addBookmark() {
  var bookmark = jquery__WEBPACK_IMPORTED_MODULE_0__('.offered-articles-main-card__bookmark');
  bookmark.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass('offered-articles-main-card__bookmark--active');
  });
}

/***/ }),

/***/ "./src/modules/menuMain.js":
/*!*********************************!*\
  !*** ./src/modules/menuMain.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menuMain = function menuMain() {
  var menuBtn = document.querySelector('.header .burger');
  var headerNavbar = document.querySelector('.header-navbar');
  var headerNavbarSearch = headerNavbar.querySelector('.header-navbar__search');

  var open = function open() {
    headerNavbar.classList.toggle('header-navbar--mobile-visible');
    headerNavbarSearch.classList.toggle('header-navbar__search--mobile-visible');
  };

  menuBtn.addEventListener('click', open);
};

/* harmony default export */ __webpack_exports__["default"] = (menuMain);

/***/ }),

/***/ "./src/modules/recomendationTabs.js":
/*!******************************************!*\
  !*** ./src/modules/recomendationTabs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var recomendationTabs = function recomendationTabs() {
  var trigers = jquery__WEBPACK_IMPORTED_MODULE_0__('.recommended-tabs-buttons__button');
  var contents = jquery__WEBPACK_IMPORTED_MODULE_0__('.recommended-tabs-content__item');
  trigers.on('click', function (evt) {
    evt.preventDefault();
    var target = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('data-target');
    console.log(target);
    contents.removeClass('recommended-tabs-content__item--visible');
    jquery__WEBPACK_IMPORTED_MODULE_0__(target).addClass('recommended-tabs-content__item--visible');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (recomendationTabs);

/***/ }),

/***/ "./src/modules/sliderMain.js":
/*!***********************************!*\
  !*** ./src/modules/sliderMain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
// import Swiper styles
 // import Swiper JS



var sliderMain = function sliderMain() {
  swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_1__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_1__["EffectFade"]]);
  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.article-cards-slider', {
    effect: 'fade',
    // direction: 'horizontal',
    speed: 400,
    loop: true,
    autoplay: true,
    pagination: {
      el: '.article-cards-slider-pagination',
      bulletClass: 'article-cards-slider-pagination__dot',
      bulletActiveClass: 'article-cards-slider-pagination__dot--active',
      clickable: true
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliderMain);

/***/ }),

/***/ "./src/sass/index.sass":
/*!*****************************!*\
  !*** ./src/sass/index.sass ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });