// 1.入口动画效果
// 2.点击nav切换显示，左右滑动屏幕时切换显示
let $navAs = $(".top nav a");
let $cSecs = $(".wrap>div");
let cSecs = document.querySelectorAll(".wrap>div");
    // 点击头部的导航切换不同的内容，同时改变nav下的样式
$navAs.tap(function () {
    $navAs.removeClass("active");
    $(this).addClass("active");

    $cSecs.removeClass("active");
    $cSecs.eq($navAs.index($(this))).addClass("active");
});
$cSecs.swipe(function () {
    console.log(1)
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


