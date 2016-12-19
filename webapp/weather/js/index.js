/*1.页面交互部分
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
/*//利用localstorage存储数据，始终保持与d中的数据同步
    var d = ["北京"];
    function storage() {
        if (window.localStorage) {
            localStorage.setItem("menuCity", d);
        } else {
            Cookie.write("menuCity", d);
        }
        var strStoreDate = window.localStorage? localStorage.getItem("menuCity"): Cookie.read("menuCity");
        strStoreDate.split(",").each(function(value, index) {
            d = ["北京"];
            d.push(value);
        });
    }*/

/*2.首页获取数据，并显示*/
    var weatherData = {
        "location": {},
        "now": {},
        "last_update": "",
        "daily": []
    };
    var d = ["北京"];
    var currentCity=d[d.length-1];
    var n=0;
    // 利用jsonp获取天气数据
    function getData() {
        var script1 = document.createElement("script");
        script1.src = 'https://api.thinkpage.cn/v3/weather/now.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showWeather&location='+currentCity;
        var script2 = document.createElement("script");
        script2.src = 'https://api.thinkpage.cn/v3/weather/daily.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=showDaily&location='+currentCity+'&start=0&days=3';
        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }
    // 判断数据是否全部返回得到，处理数据，渲染页面
    function showWeather(data){
        if(data.results.length){
            n++;
            if(data.results[0].location){
                weatherData.location = data.results[0].location;
            };
            if(data.results[0].now){
                weatherData.now = data.results[0].now;
            };
            if(n===2){
                renderWeather();
                /*if( weatherData.location.name.indexOf(d)===-1 ){
                    d.push(weatherData.location.name);
                }*/
                n=0;
            };
        }
    }
    function showDaily(data){
        if(data.results.length && data.results[0].daily){
            n++;
            weatherData.daily = data.results[0].daily;
            if(n===2){
                renderWeather();
                n=0;
            }
        }
    }
    // 封装渲染页面的函数
    function renderWeather() {
        $(".city").html(weatherData.location.name);
        $(".weather").html(weatherData.now.text);
        $(".temp").html(weatherData.now.temperature+"°");
        var weatherImgs = $('.future-weather img');
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
    // 天气页面滑动,切换城市
    var indexSec = document.querySelector(".index-sec");
    var startPoint=0;
    var a = d.length-1;
    indexSec.addEventListener('touchstart', function(e) {
        startPoint = e.changedTouches[0].pageX;
    });
    indexSec.addEventListener('touchend', function(e) {
        var nowPoint = e.changedTouches[0].pageX;
        var disX = nowPoint-startPoint;
        var w = window.innerWidth;
        if(Math.abs(disX) <= w*5/100){
            return;
        }
        if( disX> w*5/100){
            a = a+1;
            a = a%d.length;
        }
        else if( disX< -w*5/100){
            a = a-1;
            if(a<0){
                a = d.length-1;
            }
        }
        currentCity = d[a];
        d.splice(a,1);
        d.push(currentCity);
        init();
    });
/*2.city页面，根据选中的城市渲染city*/
     function renderCity(d) {
         var str = "<li><em>"+d[d.length-1]+"</em><span>当前位置</span></li>";
         for(var i=0;i<d.length-1;i++){
             str += "<li><em>"+d[i]+"</em></li>";
         }
         $(".city-choosed-list").html(str);
     };
    //程序根据数据全部初始化
    function init() {
        getData();
        $DIVS.hide();
        $indexSec.show();
        renderCity(d);
        changeStyle(d);
    };
    //点选city页面的城市列表
    var cityChoosedList = $(".city-choosed-list");
    cityChoosedList.tap(function (e) {
        if( e.target.nodeName ==="LI"){
            currentCity = $(e.target).find("em").html();
        }
        if(e.target.parentNode.nodeName ==="LI"){
            currentCity = $(e.target).parent().find("em").html();
        }
        var index = d.indexOf(currentCity);
        d.splice(index,1);
        d.push(currentCity);
        init();
    });
/*3.search页面*/
    //根据d中的数据，渲染被选中的城市，改变class
    function changeStyle(d) {
        var $lis = $(".search-sec section ul li");
        $lis.each(function () {
            if($.inArray($(this).html(), d) !== -1){
                $(this).addClass("active");
            }
        })
    }
    var listEm = $(".city-choosed-list li em");
    //处理系统默认热门城市数据
    $(".search-sec section>ul").tap(function (e) {
        if (e.target.nodeName=== 'LI') {
            if($.inArray(e.target.innerHTML, d) !== -1){
                return;
            }
            else{
                currentCity = e.target.innerHTML;
                d.push(currentCity);
                renderCity(d);
                init();
            }
        }
    });
    //输入交互
    var inputHead = $(".search-sec form input");
    var cityList =  $(".search-sec .cityList");
    inputHead.tap(function () {
        $(".search-sec section").hide();
        $(".remind").show();
    });
    inputHead.on("input",function () {
        var t = null;
        var val = $(this).val();
        if( val!== "" && /^[\u4e00-\u9fa5_a-zA-Z]+$/.test(val)){
            clearTimeout(t);
            t = setTimeout(function () {
                var script = document.createElement("script");
                script.src = 'https://api.thinkpage.cn/v3/location/search.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=searchCity&q='+val;
                document.body.appendChild(script);
            },300);
        }
        $(this).val("");
    });
    function searchCity(data) {
        if (data.results.length) {
            cityList.show();
            $(".search-sec .remind").hide();
            $(".search-sec section").hide();
            var citys = data.results;
            var str = "";
            citys.forEach(function(city, index) {
                str += "<li data-name="+city.name+">"+city.path+"</li>";
            });
            cityList.html(str);
        };
    };
    //处理zepto的事件点透问题
    cityList.on("touchend",function (e) {
        e.preventDefault();
        if ( e.target.nodeName=== 'LI'){
             e.preventDefault();
            currentCity = e.target.getAttribute('data-name');
            if (currentCity.indexOf(d) ===-1){
                d.push(currentCity);
            }
            if (currentCity.indexOf(d) !==-1){
                var index = d.indexOf(currentCity);
                d.splice(index,1);
                d.push(currentCity);
            }
            init();
            cityList.hide();
            $(".search-sec section").show();
        }
    });

init();








