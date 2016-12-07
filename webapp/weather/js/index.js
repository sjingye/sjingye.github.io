    var weatherData = {
        "location":{},
        "now":{},
        "last_update":"",
        "daily":[]
    };
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
    //





