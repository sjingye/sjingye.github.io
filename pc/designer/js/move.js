function Move(obj,attrs,duration,endFn){
	var j = {};
	for(var att in attrs ){
		j[att] = {};
		j[att].b =  parseFloat(getComputedStyle(obj)[att]);
		j[att].c = attrs[att] - j[att].b;//运行总路程
	}
	var d = duration;//持续时间
	var past = new Date();
	obj.timer = setInterval(function(){
		var now = new Date();
		var t = now - past;//已过时间
		if(t > d){
			t = d;
		}
		for(var att in j){
			var b = j[att].b;
			var c = j[att].c;
			var v = c*t/d + b;
			if( att == "opacity" ){
				obj.style[att] = v;
			}else{
				obj.style[att] = v + "px";
			}
		}
		if(t==d){
			clearInterval(obj.timer);
			endFn && endFn();
		}
	},20)
};
