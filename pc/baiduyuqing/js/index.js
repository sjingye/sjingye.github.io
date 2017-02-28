var wh=$(window).height();
var objhill4=$('.obj-hill-4');
var tpparleft=$('.tp-parleft');
var btns=$('.swiper-pagination-bullet');
var xuanzhuan=$('.xuanzhuan');
var brain=$('.brain');
var people=$('.people');
var quanmian=$('.quanmian');
var thptitle=$('.thp-left');
var fourpleft=$('.fourp-left');
var zhuanye=$('.zhuanye');
var tongji=$('.tongji');

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true,
onSlideChangeEnd:function(swiper){
    if(swiper.activeIndex==0){
        objhill4.addClass('ships');
    }
    if(swiper.activeIndex !=0){
        objhill4.removeClass('ships');
    }
    if(swiper.activeIndex==1){
        tpparleft.addClass('tplefts');
        xuanzhuan.addClass('claxuanzhuan');
        brain.addClass('claright');
    }
   if(swiper.activeIndex!=1){
       tpparleft.removeClass('tplefts');
       xuanzhuan.removeClass('claxuanzhuan')
       brain.removeClass('claright');
   }
   if(swiper.activeIndex==2){
        quanmian.addClass('clathps-left');
        thptitle.addClass('tplefts');
        people.addClass('claright');
   }
   if(swiper.activeIndex!=2){
        quanmian.removeClass('clathps-left');
        thptitle.removeClass('tplefts');
        people.removeClass('claright');
   }
   if(swiper.activeIndex==3){
        fourpleft.addClass('clafourleft');
        zhuanye.addClass('claxuanzhuan');
        tongji.addClass('clafourright')
   }
   if(swiper.activeIndex!=3){
        fourpleft.removeClass('clafourleft');
        zhuanye.removeClass('claxuanzhuan');
        tongji.removeClass('clafourright');
   }
}
});