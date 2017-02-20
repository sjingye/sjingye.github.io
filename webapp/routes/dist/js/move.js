"use strict";
class play{
    // 构造
      constructor(container,sliderLength,activeSlide) {
        // 初始状态
          this.container = container;
          this.sliderLength = sliderLength;
          this.activeSlide = activeSlide;
      };
    init(){
        //创建img元素，并append到容器中
        for(let i=0;i< this.sliderLength;i++){
            let slider = $("<img/>");
            slider.appendTo(this.container);
        }
        this.container.swipe
    }
}
