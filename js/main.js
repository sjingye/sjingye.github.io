$(function(){
    // 建立fullpage对象
    $("#fullpage").fullpage({
        menu: '#navMenu',
        // sectionsColor: ['#63d0eb', '#fb6d7e', '#f5c720', '#7851da'],
        slidesNavigation: true,
        css3: true,
        loopBottom: true,
        anchors: ['section-0', 'section-1', 'section-2']
    });
    var sections = $("section");
    // $(window).scroll(function(){
    //     consloe.log(1)
    //     sections.each(function(index,item){
    //         if($(item).hasClass("active")){
    //             console.log(index)
    //         }
    //     })
    // })
});