"use strict";
import EventUtil from "./event.js";

let message = [
    {
        default: "必填，长度为4~16位字符",
        right:"名称格式正确",
        wrong:"名称格式有误",
        isRight: "false"
    },
    {
        default:"必填，长度为4~16位字符,包含字母和数字",
        right:"密码可用",
        wrong:"密码不可用",
        isRight: "false"
    },
    {
        default:"必填，必须与上面密码相同",
        right:"密码输入一致",
        wrong:"密码输入不一致",
        isRight: "false"
    },
    {
        default:"填写正确的邮箱格式",
        right:"邮箱格式正确",
        wrong:"邮箱格式错误",
        isRight: "false"
    },
    {
        default:"必填，长度为4~16位字符",
        right:"手机格式正确",
        wrong:"手机格式错误",
        isRight: "false"
    }
];
//dom
let texts = document.querySelectorAll("input[type='text']");
let reminds = document.querySelectorAll(".remind td:nth-of-type(2)");
let btn = document.querySelector("button");

function regValue(num) {
    let text = document.getElementById("t"+num);
    let val = text.value.trim();
    let remind = document.getElementById("h"+num);
    let flag = false;
    switch (parseInt(num)){
        case 0:
            flag = /^\S{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g,"aa"));
            break;
        case 1:
            flag = /^[A-Za-z0-9]{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g,"aa"));
            break;
        case 2:
            flag = !!(texts[1].value.trim() === val);
            break;
        case 3:
            flag = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(val);
            break;
        case 4:
            flag = /^1[0-9]{10}$/.test(val);
            break;
    };
    if(flag){
        text.className="right";
        remind.className="right";
        remind.innerText=message[num].right;
        message[num].isRight = "true";
    }
    else{
        text.className="wrong";
        remind.className="wrong";
        remind.innerText=message[num].wrong;
        message[num].isRight = "false";
    }
}

for (let i=0,len=texts.length;i<len;i++){
    EventUtil.addEvent(texts[i],"focus",function () {
        reminds[i].style.display="table-cell";
        reminds[i].innerText=message[i].default;
    });
    EventUtil.addEvent(texts[i],"blur",function () {
        regValue(i);
    });
};

EventUtil.addEvent(btn,"click",function (event) {
    event = EventUtil.getEvent(event);
    event.preventDefault();
    let flag = [0,1,2,3,4].every(function (item,index) {
        return message[index].isRight === "true";
    })
    if(flag){
        alert("提交成功");
    }
    else{
        alert("提交失败");
    }
});


