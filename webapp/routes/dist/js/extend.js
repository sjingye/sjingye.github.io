/*1、封装图片懒加载组件，lazyloading*/
$.fn.lazyLoad = function () {
    var self = $(this);
    function setSrc(index) {
        var options = self.eq(index);
        if( options.dataset ){
            var src = options.dataset.src;
        }
        else{
            var src = options.attr("data-src");
        }
        options.attr("src",src);
    };
    function getH(index) {
        //元素离document顶部的距离
        var options = self.eq(index);
        var h = options.offset().top;
        /*屏幕可视窗口的高  浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
          zepto一大坑： $(window).scrollTop()是undefined，所以用的是原生的方法
         */
        var t = parseFloat(document.documentElement.clientHeight)+parseFloat(document.body.scrollTop);
        if (h<t){
            //说明元素出现在可视区内
            setTimeout(setSrc(index),500);
        }
    }
    self.each(function(index) {
        getH(index);
    })
};

/*2、封装获取滑动距离的组件*/
const getSwipeDistance = function (ele) {
    let startPosition, endPosition, deltaX, deltaY, moveLength;
    let detail = {
        way: "",
        distance: 0
    }
    ele.on("touchstart",function (e) {
        var startTouch = e.touches[0];
        startPosition = {
            x: startTouch.pageX,
            y: startTouch.pageY
        };
    });
    return ele.on("touchmove",function (e) {
        var endTouch = e.touches[0];
        endPosition = {
            x: endTouch.pageX,
            y: endTouch.pageY
        };
        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));
        if(deltaX>0){
            detail.way = "swipe-right";
        }else{
            detail.way = "swipe-left";
        }
        detail.distance = parseFloat(moveLength);
        return detail;
    });
};

// export default data;

