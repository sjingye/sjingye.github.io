import data from "./data.js";
//dom
let hotelService = $(".hotel-service");
let hotelServices = $(".hotel-service li");
let servicesBigs = $(".hotel-service li img:first-child");
let serviceInfoInfo = $(".service-info .info");
let serviceInfoPrice = $(".service-info .price");
let difRoom = $(".dif-rooms");
//点击icon切换不同内容
hotelService.on("touchend",function (e) {
    let $target =  $(e.target);
    if($target.is("li img:first-child")){
        let $parent = $target.parent().eq(0);
        let index = hotelServices.index($parent);
        $parent.addClass("active").siblings().removeClass("active");
        servicesBigs.each(function(num){
            servicesBigs.eq(num).attr("src",data.serviceData[num].img[0]);
        })
        $target.attr("src",data.serviceData[index].img[1]);
        serviceInfoInfo.html(data.serviceData[index].text);
        serviceInfoPrice.html(data.serviceData[index].price);
    }
});
//根据分数控制表格的显示长度
let uppers = $(".upper");
let commentScoresDisplay = $(".chart span");
data.commentScore.forEach(function(item,index){
    $(".upper").eq(index).width(parseFloat(item)*10+"%");
    commentScoresDisplay.eq(index).html(item);
})
// console.log(getSwipeDistance(difRoom));