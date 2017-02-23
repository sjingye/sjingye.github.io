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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const data = {
    serviceData: [{
        img: ["img/images/wifi-1.png", "img/images/wifi-2.png"],
        text: "wifi上网简单的可以了解为其实就是无线上网，目前不少智能手机与多数平板电脑都支持wifi上网，wifi全称wireless fidelity,是当今使用最广的一种无线网络传输技术。",
        price: "$5"
    }, {
        img: ["img/images/eat-1.png", "img/images/eat-2.png"],
        text: "早餐食谱中的各种营养素的量，一般应占全天的供给量的30%左右。其中对在中、晚餐中可能供给不足的营养，如能量、维生素B1等，早餐应适量增加。且做到粗细搭配，使食物蛋白质中的8种必要氨基酸组成比例更趋平衡，营养互补。",
        price: "$8"
    }, {
        img: ["img/images/dinner-1.png", "img/images/dinner-2.png"],
        text: "一天吃几顿饭在各种风俗习惯中也不尽相同。希腊人和罗马人习惯于每日两餐，近中午时吃一顿简单的饭，而在傍晚时吃正餐，中世纪的英国一天吃4顿饭，包括晚上8点吃的夜宵。",
        price: "$15"
    }, {
        img: ["img/images/spring-1.png", "img/images/spring-2.png"],
        text: "温泉（hot spring）是泉水的一种，严格意义说，是从地下自然涌出的自然水，泉口温度显著地高于当地年平均气温而又低于（等于）45度的地下水天然泉水叫温泉，并含有对人体健康有益的微量元素的矿物质泉水。",
        price: "$30"
    }],
    friendSays: [{
        username: "小明",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小红",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小绿",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小花",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小美",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小梦",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }, {
        username: "小萝",
        comment: "balabala说两句吧！balabala说两句吧！balabala说两句吧！balabala说两句吧！"
    }],
    inputCheckMessage: [{
        default: "必填，长度为4~16位字符",
        right: "名称格式正确",
        wrong: "名称格式有误",
        isRight: "false"
    }, {
        default: "填写正确的邮箱格式或手机号",
        right: "格式正确",
        wrong: "格式错误",
        isRight: "false"
    }, {
        default: "必填，长度为4~16位字符,包含字母和数字",
        right: "密码可用",
        wrong: "密码不可用",
        isRight: "false"
    }],
    commentScore: [9.0, 8.4, 8.8, 9.4]
};
/* harmony default export */ __webpack_exports__["a"] = data;

/***/ }),
/* 1 */
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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(1);



//dom
let texts = document.querySelectorAll("input[type='text']");
let reminds = document.querySelectorAll(".remind");
let btn = document.querySelector(".create-account");
let finalMessage = document.querySelector(".finalMessage");

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
            flag = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(val) || /^1[0-9]{10}$/.test(val);
            break;
        case 2:
            flag = /^[A-Za-z0-9]{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g, "aa"));
            break;
    };
    if (flag) {
        remind.innerText = __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[num].right;
        __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[num].isRight = "true";
    } else {
        remind.innerText = __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[num].wrong;
        __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[num].isRight = "false";
    }
}

for (let i = 0, len = texts.length; i < len; i++) {
    __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */].addEvent(texts[i], "focus", function () {
        reminds[i].style.display = "table-cell";
        reminds[i].innerText = __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[i].default;
    });
    __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */].addEvent(texts[i], "blur", function () {
        regValue(i);
    });
};

__WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */].addEvent(btn, "click", function (event) {
    event = __WEBPACK_IMPORTED_MODULE_1__event_js__["a" /* default */].getEvent(event);
    event.preventDefault();
    let flag = [0, 1, 2].every(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* default */].inputCheckMessage[index].isRight === "true";
    });
    if (flag) {
        finalMessage.innerHTML = "提交成功";
    } else {
        finalMessage.innerHTML = "提交失败";
    }
});

/***/ })
/******/ ]);