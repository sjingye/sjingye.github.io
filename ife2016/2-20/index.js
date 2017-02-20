//DOM
var inp = document.getElementById("inp");
var btns = document.querySelectorAll(".btn");
var lin = btns[0];
var rin = btns[1];
var lout = btns[2];
var rout = btns[3];
var queryBtn = btns[4];
var wrap = document.querySelector(".wrap");
var query = document.querySelector(".query");
var arr = [];

//通用的一些方法
function addEvent(element,event,listener) {
    //验证方法是否存在
    if(element.addEventListener){
        element.addEventListener(event,listener);
    }
    else if(element.attachEvent){
        element.attachEvent("on"+event,listener);
    }
    else{
        element["on"+event] = listener;
    }
};
//提取出满足条件的输入值
function getValue() {
    // ^ 在[]中使用表示排除，取非
    return inp.value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function (item) {
        return item != "";
    })
}
//为各个按钮加上点击事件
addEvent(lin,"click",function () {
    if( getValue() ){
        arr = getValue().concat(arr);
        draw();
    }
    inp.value="";
});
addEvent(rin,"click",function () {
    if( getValue() ){
        arr = arr.concat( getValue() );
        draw();
    }
    inp.value="";
});

addEvent(lout,"click",function () {
    alert(arr.shift());
    draw();
});

addEvent(rout,"click",function () {
    alert(arr.pop());
    draw();
});

addEvent(queryBtn,"click",function () {
    var str = query.value.trim();
    wrap.innerHTML= arr.map(function (item) {
        return "<li>"+item.replace(new RegExp(str,"g"),"<span>"+str+"</span>")+"</li>";
    }).join("");
    query.value = "";
});

//为每个加上的元素添加点击事件
addEvent(wrap,"click",function (e) {
    if(e.target.nodeName === "LI"){
        var index = arr.indexOf(e.target.innerHTML);
        arr.splice(index,1);
        draw();
    }
});
//根据数组修改wrap的html
function draw() {
    wrap.innerHTML= arr.map(function (item) {
        return "<li>"+item+"</li>";
    }).join("");
};


