// 1.入口动画效果
// 2.top点击切换显示
let navAs = $(".top nav a");
let cSecs = $(".wrap>div");
    // 点击头部的导航切换不同的内容，同时改变nav下的样式
navAs.tap(function () {
    navAs.removeClass("active");
    $(this).addClass("active");

    cSecs.removeClass("active");
    cSecs.eq(navAs.index($(this))).addClass("active");
});
    // 轮播图，幻灯片显示
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
/*图片懒加载*/
window.onload = function(){
    $(".dif-sections>li>a>img").lazyLoad();
    window.onscroll = function () {
        $(".dif-sections>li>a>img").lazyLoad();
    }
}


