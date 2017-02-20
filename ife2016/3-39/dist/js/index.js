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
//数据
let data = {
    //数据
    hData: ["姓名", "语文", "数学", "英语", "总分"],
    bData: [{
        name: "小红",
        chinese: "90",
        math: "60",
        english: "90",
        total: "240"
    }, {
        name: "小亮",
        chinese: "60",
        math: "100",
        english: "90",
        total: "250"
    }, {
        name: "小明",
        chinese: "80",
        math: "70",
        english: "90",
        total: "240"
    }, {
        name: "小红",
        chinese: "90",
        math: "60",
        english: "90",
        total: "240"
    }, {
        name: "小亮",
        chinese: "60",
        math: "100",
        english: "90",
        total: "250"
    }, {
        name: "小明",
        chinese: "80",
        math: "70",
        english: "90",
        total: "240"
    }, {
        name: "小红",
        chinese: "90",
        math: "60",
        english: "90",
        total: "240"
    }, {
        name: "小亮",
        chinese: "60",
        math: "100",
        english: "90",
        total: "250"
    }, {
        name: "小明",
        chinese: "80",
        math: "70",
        english: "90",
        total: "240"
    }, {
        name: "小红",
        chinese: "90",
        math: "60",
        english: "90",
        total: "240"
    }, {
        name: "小明",
        chinese: "80",
        math: "70",
        english: "90",
        total: "240"
    }, {
        name: "小红",
        chinese: "90",
        math: "60",
        english: "90",
        total: "240"
    }]

};

/* harmony default export */ __webpack_exports__["a"] = data;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(0);

class Table {
    constructor(container, theadData, tbodyData) {
        this.container = container;
        this.theadData = theadData;
        this.tbodyData = tbodyData;
    }
    init() {
        let self = this;
        self.fill();
        self.freeze();
    }
    //封装根据数据填充html的方法
    fill() {
        let html = '<table class="table table-hover table-bordered"><thead class="start">';
        this.theadData.map(function (item) {
            html += `<th class="text-center">${item}</th>`;
        });
        html += '</thead><tbody>';
        this.tbodyData.map(function (item) {
            let str = "";
            for (let key in item) {
                str += `<td class="text-center">${item[key]}</td>`;
            }
            html += `<tr>${str}</tr>`;
        });
        html += `</tbody></table>`;
        this.container.append($(html));
    }
    //封装冻结首行的方法
    freeze() {
        let $thead = this.container.find("thead");
        let $table = this.container.find("table");
        let headOffTop = this.container.offset().top;
        let headOffLeft = this.container.offset().left;
        // trFirst.css("top",headOffTop).css("left",headOffLeft);
        $(window).scroll(function () {
            if ($thead.offset().top < $(document).scrollTop()) {
                // trFirst.css("top",0).css("left",0);
                // $thead.css("position","fixed").css("left",headOffLeft).css("top",0);
                $thead.css({
                    "position": "fixed",
                    "left": headOffLeft,
                    "top": 0,
                    "z-index": 4,
                    "width": $table.width()
                }).find("th").css({
                    "width": $table.width() / __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].hData.length
                });
            } else if ($table.offset().top + $table.height() < $(document).scrollTop()) {
                $thead.hide();
            }
        });
    }
}

//dom
let $t1 = $(".t1");
let $t2 = $(".t2");
let $t3 = $(".t3");

//生成实例
let t1 = new Table($t1, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].hData, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].bData);
let t2 = new Table($t2, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].hData, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].bData);
let t3 = new Table($t3, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].hData, __WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */].bData);

t1.init();
t2.init();
t3.init();

/***/ })
/******/ ]);