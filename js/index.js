let h = $(".time .hm span");
let m = $(".time .hm em");
let day = $(".time p span");
let week = $(".time p em");
var weekName = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

function getTimeInter() {
    let t = null;
    clearInterval(t);
    t = setInterval(function () {
        getTime();
    },800);
};
function getTime() {
    let date = new Date();
    let hours = date.getHours();
    h.html(hours<10?"0"+hours:hours);
    let mins = date.getMinutes();
    m.html(mins<10?"0"+m:mins);
    $(".time  p:nth-of-type(2) span").html( (date.getMonth()+1)+"月"+date.getDate()+"日");
    let w = date.getDay();
    $(".time  p:nth-of-type(2) em").html( weekName[w] );
};
function init() {
    getTime();
    getTimeInter();
};
init();