var weatherData = {
	"location":{},
	"now":{},
	"last_update":"",
	"daily":[]
};
/*      var weatherData = {
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
                   "low": "17",                      //当天最低温度
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
                   "high": "25",
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
       };*/

    var currentCity="上海";
    var n=0;
    function getData() {
        var script1 = document.createElement("script");
        script1.src = 'https://api.thinkpage.cn/v3/weather/now.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showWeather&location='+currentCity;
        var script2 = document.createElement("script");
        script2.src = 'https://api.thinkpage.cn/v3/weather/now.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showDaily&location='+currentCity+'&start=0&days=3';
        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }
    function showWeather(data){
        if(data.result.length){
            n++;
            if(data.result[0].location){
                weatherData.location = data.result[0].location;
            }
            if(data.result[0].now){
                weatherData.now = data.result[0].now;
            }
            if(n===2){
                renderWeather();
                n=0;
            }
        }
    }
    function showDaily(data){
        if(data.result.length&&data.result[0].daily){
            n++;
            weatherData.daily = data.result[0].daily;
            if(n===2){
                renderWeather();
                n=0;
            }
        }
    }


var d=[];
d.push(weatherData.location.name);
getData();
renderWeather();
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





