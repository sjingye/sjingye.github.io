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
        //????????????????????????
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




let message = [{
    default: "??????????????????4~16?????????",
    right: "??????????????????",
    wrong: "??????????????????",
    isRight: "false"
}, {
    default: "??????????????????4~16?????????,?????????????????????",
    right: "????????????",
    wrong: "???????????????",
    isRight: "false"
}, {
    default: "????????????????????????????????????",
    right: "??????????????????",
    wrong: "?????????????????????",
    isRight: "false"
}, {
    default: "???????????????????????????",
    right: "??????????????????",
    wrong: "??????????????????",
    isRight: "false"
}, {
    default: "??????????????????4~16?????????",
    right: "??????????????????",
    wrong: "??????????????????",
    isRight: "false"
}];
//dom
let texts = document.querySelectorAll("input[type='text']");
let reminds = document.querySelectorAll(".remind td:nth-of-type(2)");
let btn = document.querySelector("button");

function regValue(num) {
    let text = document.getElementById("t" + num);
    let val = text.value.trim();
    let remind = document.getElementById("h" + num);
    let flag = false;
    switch (parseInt(num)) {
        case 0:
            flag = /^\S{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g, "aa"));
            break;
        case 1:
            flag = /^[A-Za-z0-9]{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g, "aa"));
            break;
        case 2:
            flag = !!(texts[1].value.trim() === val);
            break;
        case 3:
            flag = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(val);
            break;
        case 4:
            flag = /^1[0-9]{10}$/.test(val);
            break;
    };
    if (flag) {
        text.className = "right";
        remind.className = "right";
        remind.innerText = message[num].right;
        message[num].isRight = "true";
    } else {
        text.className = "wrong";
        remind.className = "wrong";
        remind.innerText = message[num].wrong;
        message[num].isRight = "false";
    }
}

for (let i = 0, len = texts.length; i < len; i++) {
    __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(texts[i], "focus", function () {
        reminds[i].style.display = "table-cell";
        reminds[i].innerText = message[i].default;
    });
    __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(texts[i], "blur", function () {
        regValue(i);
    });
};

__WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(btn, "click", function (event) {
    event = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getEvent(event);
    event.preventDefault();
    let flag = [0, 1, 2, 3, 4].every(function (item, index) {
        return message[index].isRight === "true";
    });
    if (flag) {
        alert("????????????");
    } else {
        alert("????????????");
    }
});

/***/ })
/******/ ]);