// 1.入口动画效果
// 2.点击nav切换显示，左右滑动屏幕时切换显示
let $navAs = $(".top nav a");
let $cSecs = $(".wrap>div");
let cSecs = document.querySelectorAll(".wrap>div");
var eleIndex = 0;
    // 点击头部的导航切换不同的内容，同时改变nav下的样式
$navAs.on("touchend",function () {
    $navAs.removeClass("active");
    $(this).addClass("active");
    eleIndex = $navAs.index($(this));
    $cSecs.removeClass("active");
    $cSecs.eq(eleIndex).addClass("active");
});
    // 滑动不同的内容板块，切换不同的内容
/*封装滑动函数*/
var getSwipeDistance = function (selector) {
    var el = document.querySelectorAll(selector);
    var startPosition, endPosition, deltaX, deltaY, moveLength;
    var activeEleIndex = eleIndex;
    for (let i =0;i<el.length;i++){
        el[i].addEventListener("touchstart",function (e) {
            var startTouch = e.touches[0];
            startPosition = {
                x: startTouch.pageX,
                y: startTouch.pageY
            };
        });
        el[i].addEventListener("touchmove",function (e) {
            var endTouch = e.touches[0];
            endPosition = {
                x: endTouch.pageX,
                y: endTouch.pageY
            };
            deltaX = endPosition.x - startPosition.x;
            deltaY = endPosition.y - startPosition.y;
            moveLength = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));
            if( moveLength >= (window.innerWidth)*10/100){
                if( deltaX>0 ){
                    activeEleIndex++;
                    if(activeEleIndex === el.length){
                        activeEleIndex=0;
                    }
                }
                else if( deltaX<0 ){
                    activeEleIndex--;
                    if(activeEleIndex<0){
                        activeEleIndex=el.length-1;
                    }
                }
            }
        });
        el[i].addEventListener("touchend",function() {
            eleIndex = activeEleIndex;
        });
    };
    $navAs.removeClass("active");
    $navAs.eq(eleIndex).addClass("active");
    $cSecs.removeClass("active");
    $cSecs.eq(eleIndex).addClass("active");
};
getSwipeDistance(".wrap>div");
$cSecs.on("swipe",function () {
    getSwipeDistance(".wrap>div")
});
    // 轮播图，幻灯片显示。使用了iswiper插件
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplay:3000,
    effect:"fade",
    loop: true
});
// 3.遮罩层
let mask = $(".mask");
let iconList = $(".top-label a");
let sidebarAs = $(".sidebar a");
let sidebar = $(".sidebar");
    //点击icon切换遮罩层
iconList.eq(0).tap(function(){
    mask.show();
});
sidebarAs.eq(0).tap(function () {
    mask.hide();
});
 //滑动sidebar，sidebar消失,zepto的swipe事件失效,用原生的事件解决的，同时禁止默认行为，防止事件穿透
sidebar.on('touchmove', function (event) {
    event.preventDefault();
    $(this).animate(
        mask.hide(),
        5000
    );
});
//4.图片懒加载
window.onload = function(){
    //初始化
    $(".dif-sections>li>a>img").lazyLoad();
    $(".every-recom>li .bigp img").lazyLoad();
    $(".every-recom>li .midp img").lazyLoad();
    $(".item-pic").lazyLoad();
    //当下拉时图片懒加载
    window.onscroll = function () {
        $(".dif-sections>li>a>img").lazyLoad();
        $(".every-recom>li .bigp img").lazyLoad();
        $(".every-recom>li .midp img").lazyLoad();
        $(".item-pic").lazyLoad();
    }
}


