class album{
    constructor(container,imgArr,path){
        this.container = container;
        this.imgArr = imgArr;
        this.path = path;
    }
    init(){
        let self = this;
        let len = this.imgArr.length;
        let $div = $('<div class="over-hidden relative"></div>').addClass("style"+len);
        this.imgArr.map(function(item){
            let $img = $(`<img src=${self.path+item}>`);
            $div.append($img);
        })
        this.container.append($div);
    }
};


let $wrap = $(".wrap");
let data = [
                ["1.jpg"],
                ["1.jpg","2.jpg"],
                ["1.jpg","2.jpg","3.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
                ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
            ];
let album1 = new album($wrap.eq(0),data[0],"./image/");
let album2 = new album($wrap.eq(1),data[1],"./image/");
let album3 = new album($wrap.eq(2),data[2],"./image/");
let album4 = new album($wrap.eq(3),data[3],"./image/");
let album5 = new album($wrap.eq(4),data[4],"./image/");
let album6 = new album($wrap.eq(5),data[5],"./image/");

album1.init();
album2.init();
album3.init();
album4.init();
album5.init();
album6.init();