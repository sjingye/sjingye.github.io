import data from "./data.js";
import EventUtil from "./event.js";

//dom
let texts = document.querySelectorAll("input[type='text']");
let reminds = document.querySelectorAll(".remind");
let btn = document.querySelector(".create-account");
let finalMessage = document.querySelector(".finalMessage");

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
            flag = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(val) || /^1[0-9]{10}$/.test(val);
            break;
        case 2:
            flag = /^[A-Za-z0-9]{4,16}$/.test(val.replace(/[\u0391-\uFFE5]/g,"aa"));
            break;
    };
    if(flag){
        remind.innerText = data.inputCheckMessage[num].right;
        data.inputCheckMessage[num].isRight = "true";
    }
    else{
        remind.innerText = data.inputCheckMessage[num].wrong;
        data.inputCheckMessage[num].isRight = "false";
    }
}

for (let i=0,len=texts.length;i<len;i++){
    EventUtil.addEvent(texts[i],"focus",function () {
        reminds[i].style.display="table-cell";
        reminds[i].innerText = data.inputCheckMessage[i].default;
    });
    EventUtil.addEvent(texts[i],"blur",function () {
        regValue(i);
    });
};

EventUtil.addEvent(btn,"click",function (event) {
    event = EventUtil.getEvent(event);
    event.preventDefault();
    let flag = [0,1,2].every(function (item,index) {
        return data.inputCheckMessage[index].isRight === "true";
    })
    if(flag){
        finalMessage.innerHTML = "提交成功";
    }
    else{
        finalMessage.innerHTML = "提交失败";
    }
});