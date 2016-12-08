/*页面交互部分
点击首页的icon切换页面显示（全部）*/
var $DIVS = $("body>div")
var $indexSec = $(".index-sec");
var $citySec = $(".city-sec");
var $searchSec = $(".search-sec");
$(".index-sec header>a").tap(function () {
    $DIVS.hide();
    $citySec.show();
});
$(".city-sec header>a").eq(0).tap(function () {
    $DIVS.hide();
    $indexSec.show();
});
$(".city-sec header>a").eq(1).tap(function () {
    $DIVS.hide();
    $searchSec.show();
});
$(".search-sec header>a").tap(function () {
    $DIVS.hide();
    $citySec.show();
});

/*首页获取数据，并显示*/
   var weatherData = {
        "location":{},
        "now":{},
        "last_update":"",
        "daily":[]
    };
 var weatherData = {
           location: {
               "id": "C23NB62W20TF",
               "name": "北京",
               "country": "US",
               "timezone": "America/Los_Angeles",
               "timezone_offset": "-07:00"
           },
           last_update: "2015-09-20T18:00:00+08:00",
           now: {
               "text": "多云", //天气现象文字
               "code": "4", //天气现象代码
               "temperature": "14", //温度，单位为c摄氏度或f华氏度
               "feels_like": "14", //体感温度，单位为c摄氏度或f华氏度
               "pressure": "1018", //气压，单位为mb百帕或in英寸
               "humidity": "76", //相对湿度，0~100，单位为百分比
               "visibility": "16.09", //能见度，单位为km公里或mi英里
               "wind_direction": "西北", //风向文字
               "wind_direction_degree": "340", //风向角度，范围0~360，0为正北，90为正东，180为正南，270为正西
               "wind_speed": "8.05", //风速，单位为km/h公里每小时或mph英里每小时
               "wind_scale": "2", //风力等级，请参考：http://baike.baidu.com/view/465076.htm
               "clouds": "90", //云量，范围0~100，天空被云覆盖的百分比 #目前不支持中国城市#
               "dew_point": "-12" //露点温度，请参考：http://baike.baidu.com/view/118348.htm #目前不支持中国城市#
           },
           daily: [{                         //返回指定days天数的结果
                   "date": "2015-09-20",             //日期
                   "text_day": "多云",               //白天天气现象文字
                   "code_day": "4",                  //白天天气现象代码
                   "text_night": "晴",               //晚间天气现象文字
                   "code_night": "0",                //晚间天气现象代码
                   "high": "26",                     //当天最高温度
                   "low": "7",                      //当天最低温度
                   "precip": "0",                    //降水概率，范围0~100，单位百分比
                   "wind_direction": "",             //风向文字
                   "wind_direction_degree": "255",   //风向角度，范围0~360
                   "wind_speed": "9.66",             //风速，单位km/h（当unit=c时）、mph（当unit=f时）
                   "wind_scale": ""                  //风力等级
               }, {
                   "date": "2015-09-21",
                   "text_day": "晴",
                   "code_day": "0",
                   "text_night": "晴",
                   "code_night": "0",
                   "high": "27",
                   "low": "17",
                   "precip": "0",
                   "wind_direction": "",
                   "wind_direction_degree": "157",
                   "wind_speed": "17.7",
                   "wind_scale": "3"
               }, {
                   "date": "2015-09-22",
                   "text_day": "晴",
                   "code_day": "0",
                   "text_night": "晴",
                   "code_night": "0",
                   "high": "27",
                   "low": "17",
                   "precip": "0",
                   "wind_direction": "",
                   "wind_direction_degree": "157",
                   "wind_speed": "17.7",
                   "wind_scale": "3"
               }
           ]
       };
    var currentCity="北京";
    var n=0;
    var d = [currentCity];
    function getData() {
        var script1 = document.createElement("script");
        script1.src = 'https://api.thinkpage.cn/v3/weather/now.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showWeather&location='+currentCity;
        var script2 = document.createElement("script");
        script2.src = 'https://api.thinkpage.cn/v3/weather/daily.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showDaily&location='+currentCity+'&start=0&days=3';
        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }
    function showWeather(data){
        if(data.results.length){
            n++;
            if(data.results[0].location){
                weatherData.location = data.results[0].location;
            }
            if(data.results[0].now){
                weatherData.now = data.results[0].now;
            }
            if(n===2){
                renderWeather();
                /*if( weatherData.location.name.indexOf(d)===-1 ){
                    d.push(weatherData.location.name);
                }*/
                n=0;
            }
        }
    }
    function showDaily(data){
        if(data.results.length&&data.results[0].daily){
            n++;
            weatherData.daily = data.results[0].daily;
            if(n===2){
                renderWeather();
                n=0;
            }
        }
    }
// getData();
//  renderWeather();
function renderWeather() {
    $(".city").html(weatherData.location.name);
    $(".weather").html(weatherData.now.text);
    $(".temp").html(weatherData.now.temperature+"°");
    var weatherImgs = $('.future-weather img');
    var lows = $('.future-weather img');
    weatherImgs.each(function( index ) {
        var code = weatherData.daily[index].code_day;
        src = "img/3d_60/"+code+".png";
        weatherImgs.eq(index).attr("src",src);
        $(".wea span").eq(index).html(weatherData.daily[index].text_day);
        $(".wea strong").eq(index).html(weatherData.daily[index].text_night);
        $(".lh span").eq(index).html(weatherData.daily[index].low);
        $(".lh strong").eq(index).html(weatherData.daily[index].high);
    });
}

//根据选中的城市渲染city
 function renderCity(d) {
     var str = "<li><em>"+d[0]+"</em><span>当前位置</span></li>";
     for(var i=1;i<d.length;i++){
         str += "<li><em>"+d[i]+"</em></li>";
     }
     $(".city-choosed-list").html(str);
 }
//search页面
function changeStyle(d) {
    var $lis = $(".search-sec section ul li");
    $lis.each(function () {
        if($.inArray($(this).html(), d) !== -1){
            $(this).addClass("active");
        }
    })
}

function init() {
    getData();
    $DIVS.hide();
    $indexSec.show();
    renderCity(d);
    changeStyle(d);
}
$(".search-sec section>ul").tap(function (e) {
    if (e.target.nodeName=== 'LI') {
        if($.inArray(e.target.innerHTML, d) !== -1){
            return;
        }
        else{
            currentCity = e.target.innerHTML;
            d.push(currentCity);
            var listEm = $(".city-choosed-list li em");
            listEm.eq(0).html(d[d.length-1]);
            for(var i=1;i<listEm.length;i++){
                listEm.eq(i).html(d[i-1]);
            }
            init();
            $DIVS.hide();
            $indexSec.show();
        }
    }
});
var inputHead = $(".search-sec form input");
var cityList =  $(".search-sec .cityList");
inputHead.tap(function () {
    $(".search-sec section").hide();
    $(".remind").show();
})
inputHead.on("input",function () {
    var t = null;
    //需要限定输入进来的是汉字才提交
    if( $(this).val()!== "" ){
        clearTimeout(t);
        t = setTimeout(function () {
            var script = document.createElement("script");
            script.src = 'https://api.thinkpage.cn/v3/location/search.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=searchCity&q='+inputHead.val();
            document.body.appendChild(script);
        },500);
    }
});
function searchCity(data) {
    if (data.results.length) {
        cityList.show();
        $(".search-sec .remind").hide();
        $(".search-sec section").hide();
        var citys = data.results;
        var str = '';
        citys.forEach(function(city, index) {
            str += "<li data-name="+city.name+">"+city.path+"</li>";
        });
        cityList.html(str);
        cityList.tap(function (e) {
            if (e.target.nodeName=== 'LI'&& $(this).html().indexOf(d) ===-1) {
                currentCity = e.target.getAttribute('data-name');
                d.push(currentCity);
                init();
                cityList.hide();
                inputHead.val("");
                $(".search-sec section").show();
            }
        });
    } else {
        cityList.hide();
    }
}
init();








