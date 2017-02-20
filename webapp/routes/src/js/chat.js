'use strict';

let $iTalk = $(".talk-box .input-talk");
let $iSend = $(".talk-box .send");
//发送消息的函数
let sendMessage = function(){
    let newTalk = $("<div class='customer-talk'></div>").html("<div><p>"+$iTalk.val()+"</p><p class='talk-time'><strong>"+tabDate(new Date()).date+"</strong><em>"+tabDate(new Date()).time+"</em></p></div>");
    $(".wrap").append(newTalk);
    $iTalk.val("");
}
//点击按钮，发送消息
$iSend.on("touchend",sendMessage);
//封装转换为日期的函数
function tabDate(t) {
    var tobj = {};
    var y = t.getFullYear();
    var m = t.getMonth();
    var d= t.getDate();
    tobj.date = (m+1)+"-"+d;
    var h = t.getHours();
    var min = t.getMinutes();
    if(Number(min)<10){
        min = "0"+min;
    };
    tobj.time = h+":"+min;
    return tobj;
};
//输入框自动获取焦点
$(document).ready(
	$iTalk.focus()
);


	//拖拽
	/*var dx,dy=0;
	var wrap = document.querySelector(".wrap");
	touch.on(wrap, 'dragstart', function(ev){
		ev.preventDefault();
	});
	touch.on(wrap, 'drag', function(ev){
		dy = dy||0;
		var offy = dy+ev.y+"px";
		if(offy>0){
			offy = 0;
		}
		wrap.style.webkitTransform = "translateY("+offy+")";
	});
	touch.on(wrap, 'dragend', function(ev){
		dy += ev.y;
	});*/
//参考百度的事件写的，据说移动端对定位的支持不是很好，所以最好用css做效果。
//D:\BaiduYunDownload\project\06app\public\touch.baidu example.js里的drag部分
