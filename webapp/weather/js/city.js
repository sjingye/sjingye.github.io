function renderCity(d) {
    var str = "<li><em>"+d[0]+"</em><span>当前位置</span></li>";
    for(var i=1;i<d.length;i++){
        str += "<li><em>"+d[i]+"</em></li>";
    }
    $("ul").html(str);
}
renderCity(d);
