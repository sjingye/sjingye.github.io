    // 1.入口动画效果

    let mask = $(".mask");
    let iconList = $(".top-label a");
    let menuAs = $(".sidebar a");
    console.log(iconList)
    iconList.eq(0).tap(function(){
        mask.show();
    });
    menuAs.eq(0).tap(function () {
        mask.hide();
    });

