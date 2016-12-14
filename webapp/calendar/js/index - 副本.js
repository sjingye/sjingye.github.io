(function () {
    var dateUl = document.querySelector(".date");
    var time = new Date();
    var today = time.getDate();
    var mon = time.getMonth();
    renderUl(mon+1);
    chooseDays();

    //渲染nav里显示的月份
    var navAs = $("nav a");
    navAs.each(function (index) {
        $(this).html((mon+index)%12+1);
    })
    //用户tap nav切换，渲染不同的ul显示，li显示
    navAs.tap(function () {
        //改头部
        var index = navAs.index(this);
        navAs.removeClass("active");
        $(this).addClass("active");
        //根据点击的nav，不同的月份渲染不同的ul
        renderUl(index+mon+1);
        //根据点击的nav，渲染不同的li
        chooseDays();
    })

   /* k=nowM-mon-1;
    k=m-mon-1;*/
    //渲染不同的ul,m为当下处于active状态下的月份
    function renderUl(m) {
        var str = "";
        var time = new Date();
        if (m-mon-1 === 0) {
            today = time.getDate();
        }
        else {
            today = 1;
        }
        time.setMonth( m-1 );
        time.setDate(1);
        var w = time.getDay();
        time.setMonth(m);
        time.setDate(0);
        var days = time.getDate();
        var dayLast = time.getDay();
        for (var i = 0; i < w; i++) {
            str += "<li><p></p></li>"
        };
        for (var i = 1; i < today; i++) {
            str += "<li><p class='past'>" + i + "</p></li>"
        };
        for (var i = today; i < days + 1; i++) {
            str += "<li><p class='choose-able'>" + i + "</p></li>";
        };
        for (var i = dayLast; i < 7; i++) {
            str += "<li><p></p></li>"
        };
        dateUl.innerHTML = str;
    };

    //将对应的时间转化为时间戳
    function getTime(month,date) {
        var year = time.getFullYear();
        if( month>11 ){
            year = year+1;
        }
        return new Date(year,month, date).valueOf();
    }
    //选择确认时间
    function chooseDays() {
        var onoff=false;
        var allDays = $(".date .choose-able");
        var showMonth = $(".choose-date strong");
        var showDate = $(".choose-date span");
        allDays.tap(function () {
            var nowM = parseInt($("nav .active").html());
            //第一次点击选择
            if(!onoff){
                Days = [{},{}];
                renderOne($(this));
                onoff = !onoff;
            }
            //第二次点击选择
            if(onoff){
                if(getTime(Days[0].month,Days[0].date < getTime(nowM,parseInt( $(this).html() ))){
                    Days[1].month = nowM;
                    Days[1].date = parseInt( $(this).html() );
                    onoff = !onoff;
                }else{

                }

            }
            console.log(Days)
        });
    }
    // TODO why?? 时间选择上有问题
    chooseDays();

    function renderOne(objOne) {
        Days[0].month = nowM;
        Days[0].date = parseInt(objOne.html());
        allDays.removeClass("active");
        allDays[Days[0].date-today].className="active";
        showMonth[0].html(nowM);
        showDate[0].html(objOne.html());
    };

    function renderTwo(i) {
        var allDays = $(".date .choose-able");
       if( getTime(nowM,i+today)<getTime(Days[1].month,Days[1].date) && getTime(nowM,i+today)>getTime(Days[0].month,Days[0].date)){
           // TODO why?? i怎么与html产生关系，且需要根据当下的月份，来决定显示的元素在前还是后
           allDays.removeClass("active");
           allDays[i].addClass("active");
       }
        showMonth[1].html(Days[1].month);
        showDate[1].html(Days[1].date);
    };
})();
