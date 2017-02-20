var textMore = $(".comment li strong");
// 用zepto的tap事件，遇到了事件穿透的问题，所以改为用原生事件，同时禁止了默认行为
textMore.on( "touchend",function (e) {
    e.preventDefault();
    $(this).siblings("p").toggleClass("more");
})
