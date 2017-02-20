//DOM
var inp = document.getElementById("inp");
var btns = document.querySelectorAll(".btn");
var lin = btns[0];
var rin = btns[1];
var lout = btns[2];
var rout = btns[3];
var randomCreate = btns[4];
var sort = btns[5];
var wrap = document.querySelector(".wrap");
var arr = [];

//通用的一些方法
function addEvent(element,event,listener) {
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
    var val = inp.value.trim();
    if( !(/^(?:[1-9]\d|100)$/g).test(val) ){
        alert("请输入10-100之间的整数");
        return false;
    }
    else{
        return val;
    }
}
//为各个按钮加上点击事件
addEvent(lin,"click",function () {
    if( checkArrLength() && getValue() ){
        arr.unshift( getValue() );
        draw();
    }
    inp.value="";
});
addEvent(rin,"click",function () {
    if( checkArrLength() && getValue() ){
        arr.push( getValue() );
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

addEvent(randomCreate,"click",function () {
    arr = [];
    for(var i=0;i<15;i++){
        arr.push(parseInt(i*Math.random()*6)+10);
    }
    draw();
});

addEvent(sort,"click",function () {
    arr.sort(function (a,b) {
        return a-b;
    })
    draw();
});
//为每个加上的li元素添加点击事件
addEvent(wrap,"click",function (e) {
    if(e.target.nodeName === "LI"){
        var index = arr.indexOf(e.target.innerHTML);
        arr.splice(index,1);
        draw();
    }
});
//根据数组修改wrap的html
function draw() {
    wrap.innerHTML = "";
    var str = "";
    arr.forEach(function (item,index) {
        str += `
            <li style="height:${parseInt(item)*3}px;left:${index*50}px">${item}</li>
        `
    });
    wrap.innerHTML = str;
};
//检查队列的长度
function checkArrLength() {
   if (arr.length >=60){
       alert("已经达到最大限度");
       return false;
   }
    else{
       return true;
   }
};

