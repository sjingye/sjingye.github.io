"use strict";
import EventUtil from "./event.js";

let text = document.querySelector("#text");
let btn = document.querySelector("button");
let remind = document.querySelector("p");
var reset = function () {
    text.className = "";
    remind.className = "";
    remind.innerHTML = "必填，长度为4~16个字符";
}
EventUtil.addEvent(btn,"click",function () {
    reset();
    let stringLength = 0;
    let val = text.value;
    var reg = /[\u4e00-\u9fa5]/;
    for(let i=0,len=val.length;i<len;i++){
        if(reg.test(val.charAt(i))){
            stringLength =  stringLength + 2;
        }
        else{
            stringLength++;
        }
    }
    if(stringLength<17 && stringLength>3){
        text.className = "right";
        remind.className = "right";
        remind.innerHTML = "名称格式正确";
    }
    else{
        text.className = "wrong";
        remind.className = "wrong";
        remind.innerHTML = "请输入长度为4~16位字符";
    }
});

