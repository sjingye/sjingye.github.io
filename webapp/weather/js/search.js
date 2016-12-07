function changeStyle(d) {
    var lis=document.querySelectorAll("section ul li");
    for(var i=0;i<lis.length;i++){
        if(lis[i].innerHTML.indexOf(d) !== -1){
            lis[i].className = "active";
        }
    }
}
changeStyle(d);
$("section>ul").tap(function (e) {
    if (e.target.nodeName=== 'LI') {
        currentCity = e.target.innerHTML;
        inputHead.val(e.target.innerHTML);
        console.log(currentCity);
        getData();
    }
})
var inputHead = $("form input");
var cityList =  $(".cityList");
inputHead.tap(function () {
    $("section").hide();
    $(".remind").show();
    console.log(1)
})
inputHead.on("change",function () {
    var t = null;
    //需要限定输入进来的是汉字才提交
    if( $(this).val()!== ""){
        clearTimeout(t);
        t = setTimeout(function () {
            var script = document.createElement("script");
            script.src = 'https://api.thinkpage.cn/v3/location/search.json?ts=1480426837&ttl=3600000&uid=UDA821CDB4&sig=WsJ%2FO4reAerB%2FHmulk0z09sQ6tE%3D&callback=searchCity&q='+inputHead.val();
            document.body.appendChild(script);
        },200);
    }
    else{
        cityList.hide();
    }
});
function searchCity(data) {
    if (data.results.length) {
        cityList.show();
        $(".remind").hide();
        $("section").hide();
        var citys = data.results;
        var str = '';
        citys.forEach(function(city, index) {
            str += "<li data-name=city.name>"+city.path+"</li>";
        });
        cityList.html(str);
    } else {
        cityList.hide();
    }
}
cityList.tap(function (e) {
    if (e.target.nodeName=== 'LI') {
        currentCity = e.target.getAttribute('data-name');
        inputHead.val(e.target.getAttribute('data-name'));
        // cityList.style.display = 'none';
        getData();
    }
})
//数据请求未完成