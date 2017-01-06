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


