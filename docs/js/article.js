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
/******/ 		"article": 0
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
/******/ 	deferredModules.push([1,"vendors~article~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loading-attribute-polyfill */ "./node_modules/loading-attribute-polyfill/loading-attribute-polyfill.min.js");
/* harmony import */ var loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loading_attribute_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _sass_article_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/article.sass */ "./src/sass/article.sass");
/* harmony import */ var _modules_menuMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/menuMain */ "./src/modules/menuMain.js");
/* harmony import */ var _modules_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/subscription */ "./src/modules/subscription.js");
/* harmony import */ var _modules_formModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/formModal */ "./src/modules/formModal.js");
/* harmony import */ var _modules_resultModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/resultModal */ "./src/modules/resultModal.js");
/* harmony import */ var _modules_toUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/toUp */ "./src/modules/toUp.js");
/* harmony import */ var _modules_addBookmark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/addBookmark */ "./src/modules/addBookmark.js");
/* harmony import */ var _modules_sliderArticle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/sliderArticle */ "./src/modules/sliderArticle.js");
// подключение lazy-load-attrubute
 // подключение normalize










Object(_modules_menuMain__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_subscription__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_formModal__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_resultModal__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_toUp__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_addBookmark__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_sliderArticle__WEBPACK_IMPORTED_MODULE_9__["default"])();

/***/ }),

/***/ "./src/modules/Validation.js":
/*!***********************************!*\
  !*** ./src/modules/Validation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validation; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validation = /*#__PURE__*/function () {
  function Validation(_ref) {
    var form = _ref.form,
        email = _ref.email,
        error = _ref.error;

    _classCallCheck(this, Validation);

    this.form = document.querySelector(form);
    this.emailInput = document.querySelector('#' + email.id);
    this.valid = false;
    this.display = false;
    this.error = error;
    var errElem = document.createElement('label');
    errElem.for = email.id;
    errElem.className = error.className;
    this.errElem = errElem;
    this.onInput = false;
    this.init();
  }

  _createClass(Validation, [{
    key: "onInputValidation",
    value: function onInputValidation() {
      var _this = this;

      this.form.addEventListener('input', function () {
        var value = _this.emailInput.value;
        var display = _this.display;
        _this.valid = _this.validateEmail(value);
        _this.onInput = true;

        if (_this.valid) {
          if (display) {
            _this.errElem.remove();

            _this.display = false;
          }
        } else {
          if (value.trim() === '') {
            if (display) {
              _this.errElem.textContent = _this.error.message.require;
            } else {
              _this.emailInput.insertAdjacentElement('afterend', _this.errElem);

              _this.errElem.textContent = _this.error.message.require;
              _this.display = true;
            }
          } else {
            if (display) {
              _this.errElem.textContent = _this.error.message.email;
            } else {
              _this.emailInput.insertAdjacentElement('afterend', _this.errElem);

              _this.errElem.textContent = _this.error.message.email;
              _this.display = true;
            }
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        var value = _this2.emailInput.value;
        var display = _this2.display;
        _this2.valid = _this2.validateEmail(value);

        if (!_this2.onInput) {
          if (_this2.valid) {
            if (display) {
              _this2.errElem.remove();

              _this2.display = false;
            }
          } else {
            if (value.trim() === '') {
              if (display) {
                _this2.errElem.textContent = _this2.error.message.require;
              } else {
                _this2.emailInput.insertAdjacentElement('afterend', _this2.errElem);

                _this2.errElem.textContent = _this2.error.message.require;
                _this2.display = true;
              }
            } else {
              if (display) {
                _this2.errElem.textContent = _this2.error.message.email;
              } else {
                _this2.emailInput.insertAdjacentElement('afterend', _this2.errElem);

                _this2.errElem.textContent = _this2.error.message.email;
                _this2.display = true;
              }
            }
          }

          _this2.onInputValidation();

          _this2.onInput = true;
        }
      });
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(data) {
      // eslint-disable-next-line no-useless-escape
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(data);
    }
  }]);

  return Validation;
}();



/***/ }),

/***/ "./src/modules/addBookmark.js":
/*!************************************!*\
  !*** ./src/modules/addBookmark.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var addBookmark = function addBookmark() {
  var bookmark = jquery__WEBPACK_IMPORTED_MODULE_0__('.bookmark');
  bookmark.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass('bookmark--active');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addBookmark);

/***/ }),

/***/ "./src/modules/formModal.js":
/*!**********************************!*\
  !*** ./src/modules/formModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var formModal = function formModal() {
  var closeBtn = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-subscribe__close');
  var modal = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-subscribe');
  var overlay = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-subscribe__overlay');

  var close = function close() {
    return modal.removeClass('modal-subscribe--visible');
  };

  closeBtn.on('click', close);
  overlay.on('click', close);

  var random = function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
  };

  setTimeout(function () {
    modal.addClass('modal-subscribe--visible');
  }, random(4, 10) * 10000);
};

/* harmony default export */ __webpack_exports__["default"] = (formModal);

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

/***/ "./src/modules/resultModal.js":
/*!************************************!*\
  !*** ./src/modules/resultModal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var resultModal = function resultModal() {
  var closeBtn = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-result__close');
  var modal = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-result');
  var overlay = jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-result__overlay');

  var close = function close() {
    return modal.removeClass('modal-result--visible');
  };

  closeBtn.on('click', close);
  overlay.on('click', close);
};

/* harmony default export */ __webpack_exports__["default"] = (resultModal);

/***/ }),

/***/ "./src/modules/sliderArticle.js":
/*!**************************************!*\
  !*** ./src/modules/sliderArticle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
// import Swiper styles
 // import Swiper JS



var sliderArticle = function sliderArticle() {
  swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]]); // eslint-disable-next-line no-unused-vars

  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.article-slider__container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.article-slider-button--next',
      prevEl: '.article-slider-button--prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: false
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliderArticle);

/***/ }),

/***/ "./src/modules/subscription.js":
/*!*************************************!*\
  !*** ./src/modules/subscription.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/Validation */ "./src/modules/Validation.js");


var subscription = function subscription() {
  var footerForm = document.getElementById('subscribe-form');
  var modalForm = document.getElementById('modal-subscribe-form'); // eslint-disable-next-line no-useless-escape

  var footerFormValidation = new _modules_Validation__WEBPACK_IMPORTED_MODULE_0__["default"]({
    form: '#subscribe-form',
    email: {
      id: 'subscribe-email'
    },
    error: {
      className: 'invalid',
      message: {
        require: 'Данное поле должно быть заполнено',
        email: 'Введите корректный email'
      }
    }
  });
  var modalFormValidation = new _modules_Validation__WEBPACK_IMPORTED_MODULE_0__["default"]({
    form: '#modal-subscribe-form',
    email: {
      id: 'modal-subscribe-email'
    },
    error: {
      className: 'invalid',
      message: {
        require: 'Данное поле должно быть заполнено',
        email: 'Введите корректный email'
      }
    }
  });
  footerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var valid = footerFormValidation.valid;

    if (valid) {
      var fromData = new FormData(evt.target);
      var body = {};
      fromData.forEach(function (val, key) {
        return body[key] = val;
      });
      console.log(body);
      fetch('./assets/php/send.php', {
        method: 'POST',
        body: body
      }).then(function (response) {
        console.log(response);
      });
    }
  });
  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var valid = modalFormValidation.valid;

    if (valid) {
      var fromData = new FormData(evt.target);
      var body = {};
      fromData.forEach(function (val, key) {
        return body[key] = val;
      });
      console.log(body);
      fetch('./assets/php/send.php', {
        method: 'POST',
        body: body
      }).then(function (response) {
        console.log(response);
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (subscription);

/***/ }),

/***/ "./src/modules/toUp.js":
/*!*****************************!*\
  !*** ./src/modules/toUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toUp = function toUp() {
  var toUpBtn = document.querySelector('.to-up');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 700) toUpBtn.classList.add('to-up--visible');else toUpBtn.classList.remove('to-up--visible');
  });
  toUpBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toUp);

/***/ }),

/***/ "./src/sass/article.sass":
/*!*******************************!*\
  !*** ./src/sass/article.sass ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi @babel/polyfill ./src/article.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/article.js */"./src/article.js");


/***/ })

/******/ });