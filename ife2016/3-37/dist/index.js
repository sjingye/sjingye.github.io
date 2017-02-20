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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EventUtil = {
    addEvent: (element, event, listener) => {
        //验证方法是否存在
        if (element.addEventListener) {
            element.addEventListener(event, listener);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        } else {
            element["on" + event] = listener;
        }
    },
    getEvent: event => event ? event : window.event,
    getTarget: event => event.target ? event.target : event.srcElement
};
/* harmony default export */ __webpack_exports__["a"] = EventUtil;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_js__ = __webpack_require__(0);



//dom
let mask = document.querySelector(".mask");
let login = document.querySelector("header li");
let closeBtn = document.querySelector(".close-btn");
let loginBox = document.querySelector(".login-box");
let loginBoxHeader = document.querySelector(".login-box-header");
class Emersion {
    constructor(container) {
        this.container = container;
    }
    hide() {
        this.container.style.display = "none";
        mask.style.display = "none";
    }
    show() {
        this.container.style.display = "block";
        mask.style.display = "block";
    }
    drag(event) {
        let e = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getEvent(event);
        let disX = e.clientX - loginBox.offsetLeft;
        let disY = e.clientY - loginBox.offsetTop;
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(loginBoxHeader, "mousemove", function (event) {
            let e = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getEvent(event);
            loginBox.style.left = e.clientX - disX + "px";
            loginBox.style.top = e.clientY - disY + "px";
        });
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(loginBoxHeader, "mouseup", function () {
            loginBoxHeader.onmousedown = null;
            loginBoxHeader.onmousemove = null;
        });
    }
    init() {
        let self = this;
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(mask, "click", function () {
            self.hide();
        });
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(closeBtn, "click", function () {
            self.hide();
        });
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(login, "click", function () {
            self.show();
        });
        this.drag(event);
    }
};
let a = new Emersion(loginBox);
a.init();

/***/ })
/******/ ]);