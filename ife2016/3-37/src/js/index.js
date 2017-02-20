"use strict";
import EventUtil from "./event.js";
//dom
let mask = document.querySelector(".mask");
let login = document.querySelector("header li");
let closeBtn = document.querySelector(".close-btn");
let loginBox = document.querySelector(".login-box");
let loginBoxHeader = document.querySelector(".login-box-header");
class Emersion {
    constructor(container){
        this.container = container;
    }
    hide(){
        this.container.style.display = "none";
        mask.style.display = "none";
    }
    show(){
        this.container.style.display = "block";
        mask.style.display = "block";
    }
    drag(event){
        let e = EventUtil.getEvent(event);
        let disX = e.clientX - loginBox.offsetLeft;
        let disY = e.clientY- loginBox.offsetTop;
        EventUtil.addEvent(loginBoxHeader,"mousemove", function (event) {
            let e = EventUtil.getEvent(event);
            loginBox.style.left = e.clientX - disX + "px";
            loginBox.style.top = e.clientY - disY + "px";
        });
        EventUtil.addEvent(loginBoxHeader,"mouseup", function () {
            loginBoxHeader.onmousedown = null;
            loginBoxHeader.onmousemove = null;
        });
    }
    init(){
        let self = this;
        EventUtil.addEvent(mask,"click", function () {
            self.hide();
        });
        EventUtil.addEvent(closeBtn,"click",function () {
            self.hide();
        });
        EventUtil.addEvent(login,"click",function () {
            self.show();
        });
        this.drag(event);
    }
};
let a = new Emersion(loginBox);
a.init();
