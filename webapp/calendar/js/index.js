'use strict';
let contain = $(".wrap .contain");
class timePicker{
    constructor(container){
    	this.container = container;
    	this.date = new Date();
    	this.choosedEle = null;
    };

    init(){
        for(let i=0;i<42;i++){
            let ele = $("<li></li>");
            ele.appendTo(this.container);
        }
        this.renderByDate(this.date);
        let self = this;
        //触摸选择上下月事件
        $(".prev-month").tap(function(){
            self.prevMonth();
        });
        $(".next-month").tap(function(){
            self.nextMonth();
        });
        //触摸选择日期事件
        this.container.tap(function (event) {
            let $target = $(event.target);
            if($target.hasClass("past")){
                return;
            }
            if($target.is("li")){
                let lis = $(".contain li");
                let dat = new Date(self.date);
                let index = lis.index($target);
                let choosedIndex = lis.index(self.choosedEle);
                dat.setDate(index-choosedIndex+dat.getDate());
                self.chooseDate(dat);
            }
        })
    };
    renderByDate(date){
        //将当下的时间对象存在一个新的时间对象中，防止污染
        let dat = new Date(date);
        $(".choosed-time").html(date.getFullYear() + '年' + (date.getMonth() + 1) + '月');
        //日期设置为本月的1号
        // dat.setDate(dat.getDate() - date.getDate() + 1);
        dat.setDate(1);
        //得到第一个li的日期
        dat.setDate(dat.getDate() - dat.getDay());
        for(let i=0;i<42;i++){
            let $li = this.container.children().eq(i);
            $li.html(dat.getDate()).removeClass();
            //不是本月的日期
            if(dat.getMonth() !== date.getMonth() ){
                $li.addClass("past");
            }
            else if (dat.getDay()===0 || dat.getDay()===6){
                $li.addClass("weekend");
            }
            if(dat.getTime() === date.getTime()){
                $li.addClass("active");
                this.choosedEle = $li;
            }
            //每设置一次li内的值，同时将日期设置为下一天
            dat.setDate(dat.getDate()+1);
        }
    }
    prevMonth(){
        let dat = new Date(this.date);
        dat.setMonth(dat.getMonth()-1);
        this.chooseDate(dat);
    };
    nextMonth(date){
        let dat = new Date(this.date);
        dat.setMonth(dat.getMonth()+1);
        this.chooseDate(dat);
    };
    chooseDate(date){
        let $lis = $(".contain li");
        this.choosedEle.removeClass("active");
        if( date.getMonth()=== this.date.getMonth()){
            let index = $lis.index(this.choosedEle);
            console.log(index+date.getDate()-this.date.getDate())
            this.choosedEle = $lis.eq(index+date.getDate()-this.date.getDate());
            this.choosedEle.addClass("active");
            // console.log(this.choosedEle.html());
        }
        else{
            this.renderByDate(date);
        }
        this.date = date;
    };
    getSelectedDate (){
        let y = this.date.getFullYear();
        let m = this.date.getMonth()+1;
        let d = this.date.getDate();
        return y+"年"+(m<10?"0"+m : m)+"月";
    }
}

var a = new timePicker(contain);
a.init();