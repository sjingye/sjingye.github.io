'use strict';

//dom
let contains = $(".calendar ul");
let chooseDate = $(".choose-date");
let totalDays = $(".total-days");
//日期类
class timePicker{
    constructor(container,date,choosedEle,ul){
        this.container = container;
        this.date = new Date();
        this.choosedDate = {
                            start:null,
                            end: null
                        };
    };
    init(){
        //根据当下日期渲染页面
        this.renderByDate(this.date);
        let curMonth = this.date.getMonth()+1;
        let curDate = this.date.getDate()+1;
        chooseDate.html(curMonth+"."+curDate+"——"+curMonth+"."+curDate);
        let self = this;
        let onoff = false;
        //触摸选择日期事件
        this.container.on("touchend",function (event) {
            let $target = $(event.target);
            if($target.hasClass("past")){
                return;
            }
            if($target.is("li")){
                if(!onoff){
                    self.choosedDate.start = new Date($target.attr("data-date"));
                    $(".calendar ul li").removeClass("active");
                    $target.addClass("active");
                    onoff = true;
                }
                else{
                    self.choosedDate.end = new Date($target.attr("data-date"));
                    $target.addClass("active");
                    onoff = false;
                    if(self.choosedDate.end.getTime()<=self.choosedDate.start.getTime()){
                        self.choosedDate.start = new Date($target.attr("data-date"));
                        $(".calendar ul li").removeClass("active");
                        $target.addClass("active");
                        self.choosedDate.end = null;
                        onoff = true;
                    }
                }
            }
            //根据时间渲染p里的数据
            if(self.choosedDate.end && self.choosedDate.end.getTime()>self.choosedDate.start.getTime()){
                let prevMonth = self.choosedDate.start.getMonth()+1;
                let prevDate = self.choosedDate.start.getDate();
                let nextMonth = self.choosedDate.end.getMonth()+1;
                let nextDate = self.choosedDate.end.getDate();
                chooseDate.html(prevMonth+"."+prevDate+"——"+nextMonth+"."+nextDate);
                totalDays.html(nextDate-prevDate+"夜");
            }
            event.preventDefault();
        });
    };
    renderByDate(date){
        //将当下的时间对象存在一个新的时间对象中，防止污染
        let dat = new Date(date);
        for(let i=0,len=$(".choosed-time").length;i<len;i++){
            $(".choosed-time").eq(i).html(date.getFullYear() + '年' + (date.getMonth()+1+i) + '月');
        }
        //第0个月，即是本月
        //存储本月的天数
        let curMonthDays = new Date(dat.getFullYear(), (dat.getMonth()+1), 0).getDate();
        //本月，得到第一个li的日期
        dat.setDate(dat.getDate() - dat.getDay());
        for(let i=dat.getDate();i<curMonthDays+1;i++){
            let $li = $("<li></li>").html(dat.getDate()).removeClass().attr('data-date', dat);
            //不是本月的日期
            if( dat.getTime() < date.getTime() ){
                $li.addClass("past");
            }
            else if(dat.getTime() === date.getTime()){
                $li.addClass("active").next().addClass("active");
                this.choosedDate.start = dat;
                this.choosedDate.end = new Date(dat.getFullYear(), dat.getMonth(), dat.getDate()+1);
            }
            $li.appendTo(this.container.eq(0));
            //每设置一次li内的值，同时将日期设置为下一天
            dat.setDate(dat.getDate()+1);
        }
        //第1/2个月
        for(let i=1;i<3;i++){
            //存储本月的天数
            let dat = new Date(date);
            let curMonthDays = new Date(dat.getFullYear(), (dat.getMonth()+1+i), 0).getDate();
            //得到第一个li的日期
            dat = new Date(dat.getFullYear(), (dat.getMonth()+i), 1);
            for(let j=0,len=dat.getDay();j<len;j++){
                let $li = $("<li></li>").html("").removeClass();
                $li.appendTo(this.container.eq(i));
            }
            for(let j=1;j<curMonthDays+1;j++){
                let $li = $("<li></li>").html(dat.getDate()).removeClass().attr('data-date', dat);
                $li.appendTo(this.container.eq(i));
                //每设置一次li内的值，同时将日期设置为下一天
                dat.setDate(dat.getDate()+1);
            }
        }
    };
}

var a = new timePicker(contains);
a.init();
