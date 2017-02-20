//数据
let serviceData = [
    {
        img: ["img/images/wifi-1.png","img/images/wifi-2.png"],
        text: "wifi上网简单的可以了解为其实就是无线上网，目前不少智能手机与多数平板电脑都支持wifi上网，wifi全称wireless fidelity,是当今使用最广的一种无线网络传输技术。",
        price: "$5"
    },
    {
        img: ["img/images/eat-1.png","img/images/eat-2.png"],
        text: "早餐食谱中的各种营养素的量，一般应占全天的供给量的30%左右。其中对在中、晚餐中可能供给不足的营养，如能量、维生素B1等，早餐应适量增加。且做到粗细搭配，使食物蛋白质中的8种必要氨基酸组成比例更趋平衡，营养互补。",
        price: "$8"
    },
    {
        img: ["img/images/dinner-1.png","img/images/dinner-2.png"],
        text: "一天吃几顿饭在各种风俗习惯中也不尽相同。希腊人和罗马人习惯于每日两餐，近中午时吃一顿简单的饭，而在傍晚时吃正餐，中世纪的英国一天吃4顿饭，包括晚上8点吃的夜宵。",
        price: "$15"
    },
    {
        img: ["img/images/spring-1.png","img/images/spring-2.png"],
        text: "温泉（hot spring）是泉水的一种，严格意义说，是从地下自然涌出的自然水，泉口温度显著地高于当地年平均气温而又低于（等于）45度的地下水天然泉水叫温泉，并含有对人体健康有益的微量元素的矿物质泉水。",
        price: "$30"
    }
];

//dom
var hotelService = $(".hotel-service");
var hotelServices = $(".hotel-service li");
var servicesBigs = $(".hotel-service li img:first-child");
var serviceInfoInfo = $(".service-info .info");
var serviceInfoPrice = $(".service-info .price");
var difRoom = $(".dif-rooms");
//点击icon切换不同内容
hotelService.on("touchend",function (event) {
    $target =  $(event.target);
    if($target.is("li img:first-child")){
        let $parent = $target.parent().eq(0);
        let index = hotelServices.index($parent);
        $parent.addClass("active").siblings().removeClass("active");
        servicesBigs.each(function(num){
            servicesBigs.eq(num).attr("src",serviceData[num].img[0]);
        })
        $target.attr("src",serviceData[index].img[1]);
        serviceInfoInfo.html(serviceData[index].text);
        serviceInfoPrice.html(serviceData[index].price);
    }
});
//根据分数控制表格的显示长度
console.log(getSwipeDistance(difRoom));