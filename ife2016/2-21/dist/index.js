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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
const RenderLIst = {
    render: (element, list) => {
        let html = "";
        list.map(function (item) {
            html += `<li>${item}</li>`;
        });
        element.innerHTML = html;
    }
};
/* harmony default export */ __webpack_exports__["a"] = RenderLIst;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(1);





//DOM
let tagContainer = document.querySelector(".tagContainer");
let hobbyContainer = document.querySelector(".hobbyContainer");
let tagInp = document.querySelector(".tag-inp");
let hobbyInp = document.querySelector(".hobby-inp");
let btn = document.querySelector(".btn");
//封装去除左右空格的函数
let trim = str => {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
};
//封装字符串去重，且返回值是被分隔符划分的数组
let duplicateRemovalString = (sp, string) => {
    let array = string.split(sp);
    var n = [];
    array.map(function (item) {
        if (n.indexOf(item) === -1) {
            n.push(item);
        }
    });
    return n;
};
let deleteMoreThanTen = (item, array, container) => {
    if (item && array.indexOf(item) === -1) {
        array.push(item);
        if (array.length > 10) {
            array.shift();
        };
        __WEBPACK_IMPORTED_MODULE_1__render_js__["a" /* default */].render(container, array);
    };
};
//tag类
class tagEle {
    constructor(container) {
        this.container = container;
    }
    init() {
        let self = this;
        let arr = [];
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(tagInp, "keyup", function () {
            if (/[，,\n\s]+/.test(tagInp.value) || __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getEvent(event).keyCode === 13) {
                let val = trim(tagInp.value).split(/[，,\n\s]+/).join("");
                /*if(val&&arr.indexOf(val)===-1){
                    arr.push(val);
                    if(arr.length>10){
                        arr.shift();
                    };
                    RenderLIst.render(self.container,arr);
                };*/
                deleteMoreThanTen(val, arr, self.container);
                tagInp.value = "";
            }
        });
        //事件委托
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(self.container, "mouseover", function (event) {
            let target = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getTarget(event);
            if (target && target.nodeName === "LI") {
                target.innerHTML = "点击删除" + target.innerHTML;
                target.className = "delete";
            }
        });
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(self.container, "click", function () {
            let target = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getTarget(event);
            if (target && target.nodeName === "LI") {
                let index = arr.indexOf(target.innerHTML.slice(4));
                arr.splice(index, 1);
                self.container.removeChild(target);
            }
        });
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(self.container, "mouseout", function () {
            let target = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getTarget(event);
            if (target && target.nodeName === "LI") {
                target.innerHTML = target.innerHTML.slice(4);
                target.className = "";
            }
        });
    }
};
//创建一个新的tag下的ul渲染类，并调用方法
let a = new tagEle(tagContainer);
a.init();

//hobby类
class hobbyEle {
    constructor(container) {
        this.container = container;
    }
    init() {
        let self = this;
        let arrExist = [];
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addEvent(btn, "click", function (event) {
            let e = __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].getEvent(event);
            let reg = new RegExp(/[,，、/\s]+/);
            let arr = [];
            if (reg.test(hobbyInp.value) || e.keyCode === 13) {
                arr = duplicateRemovalString(reg, trim(hobbyInp.value));
                arr.map(function (item) {
                    console.log(item);
                    deleteMoreThanTen(trim(item), arrExist, self.container);
                });
            };
            hobbyInp.value = "";
        });
    }
}
let b = new hobbyEle(hobbyContainer);
b.init();

/***/ })
/******/ ]);