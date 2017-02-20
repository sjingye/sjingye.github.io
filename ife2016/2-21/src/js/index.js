"use strict";
import EventUtil from "./event.js";
import RenderLIst from "./render.js";

//DOM
let tagContainer = document.querySelector(".tagContainer");
let hobbyContainer = document.querySelector(".hobbyContainer");
let tagInp = document.querySelector(".tag-inp");
let hobbyInp = document.querySelector(".hobby-inp");
let btn = document.querySelector(".btn");
//封装去除左右空格的函数
let trim = (str) => {
   return str.replace(/^\s*/,"").replace(/\s*$/,"");
}
//封装字符串去重，且返回值是被分隔符划分的数组
let duplicateRemovalString = (sp,string) => {
    let array = string.split(sp);
    var n = [];
    array.map(function (item) {
        if(n.indexOf(item)===-1){
            n.push(item);
        }
    })
    return n;
}
let deleteMoreThanTen = (item,array,container) => {
    if(item&&array.indexOf(item)===-1){
        array.push(item);
        if(array.length>10){
            array.shift();
        };
        RenderLIst.render(container,array);
    };
}
//tag类
class tagEle{
    constructor(container){
       this.container = container;
    }
    init() {
        let self = this;
        let arr = [];
        EventUtil.addEvent(tagInp,"keyup",function () {
            if(/[，,\n\s]+/.test(tagInp.value) || EventUtil.getEvent(event).keyCode===13){
                let val = trim(tagInp.value).split(/[，,\n\s]+/).join("");
                /*if(val&&arr.indexOf(val)===-1){
                    arr.push(val);
                    if(arr.length>10){
                        arr.shift();
                    };
                    RenderLIst.render(self.container,arr);
                };*/
                deleteMoreThanTen(val,arr,self.container);
                tagInp.value = "";
            }
        });
        //事件委托
        EventUtil.addEvent(self.container,"mouseover",function (event) {
            let target = EventUtil.getTarget(event);
            if ( target && target.nodeName==="LI"){
                target.innerHTML = "点击删除"+target.innerHTML;
                target.className = "delete";
            }
        });
        EventUtil.addEvent(self.container,"click",function () {
            let target = EventUtil.getTarget(event);
            if (target && target.nodeName==="LI"){
                let index = arr.indexOf(target.innerHTML.slice(4));
                arr.splice(index,1);
                self.container.removeChild(target);
            }
        });
        EventUtil.addEvent(self.container,"mouseout",function () {
            let target = EventUtil.getTarget(event);
            if (target && target.nodeName==="LI"){
                target.innerHTML = target.innerHTML.slice(4);
                target.className = "";
            }
        });
    }
};
//创建一个新的tag下的ul渲染类，并调用方法
let a = new tagEle(tagContainer);
a.init();

//hobby类
class hobbyEle{
    constructor(container){
        this.container = container;
    }
    init() {
        let self = this;
        let arrExist = [];
        EventUtil.addEvent(btn,"click",function (event) {
            let e = EventUtil.getEvent(event);
            let reg = new RegExp(/[,，、/\s]+/);
            let arr = [];
            if(reg.test(hobbyInp.value)||e.keyCode===13){
                arr = duplicateRemovalString(reg,trim(hobbyInp.value));
                arr.map(function (item) {
                    console.log(item);
                    deleteMoreThanTen(trim(item),arrExist,self.container);
                });

            };
            hobbyInp.value = "";
        });
    };
}
let b = new hobbyEle(hobbyContainer);
b.init();