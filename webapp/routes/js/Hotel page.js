/**
 * Created by song on 2016/11/14.
 */
var serviceImgs = [
    ["img/images/wifi-1.png","img/images/wifi-2.png"],["img/images/eat-1.png","img/images/eat-2.png"],["img/images/dinner-1.png","img/images/dinner-2.png"],["img/images/spring-1.png","img/images/spring-2.png"]
];
var services = $(".hotel-service li");
var servicesBig = $(".hotel-service li img:first-child");
console.log(servicesBig)
services.tap(function () {
    services.removeClass("active");
    $(this).addClass("active");
    var index = services.index(this);
    console.log(index);
    services.toggle(
        function () {
            $(this).find("img:first-child").attr("src",serviceImgs[index][0]);
        },
        function () {
            $(this).find("img:first-child").attr("src",serviceImgs[index][1]);
        }
    );

})