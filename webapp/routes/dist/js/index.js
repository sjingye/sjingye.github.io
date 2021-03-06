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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

//1.??????????????????
/*let $enter = $(".enter");
let $enterLis = $(".enter >ul >li");
window.onload =  function(){
    play();
};
function play(){
    var index= 0;
    var timer = setInterval(function(){
        index++;
        $enterLis.eq(index).addClass("active").siblings().removeClass("active");
        if(index===4){
            clearInterval(timer);
            $enter.hide();
            return false;
        }
    },3000);
} */
// 2.??????nav????????????????????????????????????????????????
let $navAs = $(".top nav a");
let $cSecs = $(".wrap>div");
var eleIndex = 0;
// ?????????????????????????????????????????????????????????nav????????????
$navAs.on("touchend", function () {
    $(this).addClass("active").siblings().removeClass("active");
    eleIndex = $navAs.index($(this));
    $cSecs.eq(eleIndex).addClass("active").siblings().removeClass("active");
});
// ???????????????????????????????????????????????????
/*??????????????????*/
let swipeDivs = function (selector) {
    let el = document.querySelectorAll(selector);
    let startPosition, endPosition, deltaX, deltaY, moveLength;
    let activeEleIndex = eleIndex;
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("touchstart", function (e) {
            var startTouch = e.touches[0];
            startPosition = {
                x: startTouch.pageX,
                y: startTouch.pageY
            };
        });
        el[i].addEventListener("touchmove", function (e) {
            let endTouch = e.touches[0];
            endPosition = {
                x: endTouch.pageX,
                y: endTouch.pageY
            };
            deltaX = endPosition.x - startPosition.x;
            deltaY = endPosition.y - startPosition.y;
            moveLength = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
            if (moveLength >= window.innerWidth * 10 / 100) {
                if (deltaX < 0) {
                    activeEleIndex++;
                    if (activeEleIndex === el.length) {
                        activeEleIndex = 0;
                    }
                } else if (deltaX > 0) {
                    activeEleIndex--;
                    if (activeEleIndex < 0) {
                        activeEleIndex = el.length - 1;
                    }
                }
            }
        });
        el[i].addEventListener("touchend", function () {
            eleIndex = activeEleIndex;
        });
    };
    $navAs.removeClass("active").eq(eleIndex).addClass("active");
    $cSecs.removeClass("active").eq(eleIndex).addClass("active");
};
$cSecs.on("swipe", function () {
    swipeDivs(".wrap>div");
});
// ???????????????????????????,?????????iswiper??????
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: 3000,
    effect: "fade",
    loop: true
});
// 3.?????????
let mask = $(".mask");
let iconList = $(".top-label a");
let sidebarAs = $(".sidebar a");
let sidebar = $(".sidebar");
//??????icon???????????????
iconList.eq(0).tap(function () {
    mask.show();
});
sidebarAs.eq(0).tap(function () {
    mask.hide();
});
//??????sidebar???sidebar??????,zepto???swipe????????????,???????????????????????????????????????????????????????????????????????????
sidebar.on('touchmove', function (event) {
    event.preventDefault();
    $(this).animate(mask.hide(), 5000);
});
//4.???????????????
$(function () {
    //?????????
    $(".dif-sections>li>a>img").lazyLoad();
    $(".every-recom>li .bigp img").lazyLoad();
    $(".every-recom>li .midp img").lazyLoad();
    $(".item-pic").lazyLoad();
    //???????????????????????????
    window.onscroll = function () {
        $(".dif-sections>li>a>img").lazyLoad();
        $(".every-recom>li .bigp img").lazyLoad();
        $(".every-recom>li .midp img").lazyLoad();
        $(".item-pic").lazyLoad();
    };
});
//5.???????????????????????????????????????
let userCommentImgsUl = $(".friend-say div:first-child ul");
let userCommentImgsImg = $(".friend-say div:first-child ul li");
function getSwipeDistance() {}
userCommentImgsUl.swipe(function (event) {
    event.stopPropagation();
});

/***/ })

/******/ });