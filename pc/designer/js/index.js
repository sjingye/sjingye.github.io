	var tabWindow = document.querySelector(".tabwindow ");
	var topBanner = document.querySelector(".tabimgs  li"),
		topBannerImgs = document.querySelectorAll(".tabimgs  img"),
		arrImg = ["img/g0.png","img/g1.png","img/g2.png","img/g3.png","img/g4.png","img/g5.png"];
	var bannerNum = 0;
	var bannerTimer = null;
	var oneTimer = null;

	tabWindow.onmouseover = function (){
		clearInterval(bannerTimer);
		clearTimeout(oneTimer);
	}

	tabWindow.onmouseout = function (){
		oneTimer = setTimeout(autoplay,500);
	}

	//banner图片自动播放
	oneTimer;

	function autoplay(){
		bannerTimer = setInterval(function(){
			bannerNum++;
			if (bannerNum === arrImg.length){
				bannerNum = 0;
			}
			tabBanner(bannerNum);
			btnsTab(bannerNum);
		},2000);
	}

	//banner无缝滚动
	function tabBanner(num){
		topBannerImgs[1].src = arrImg[num];
		Move(topBanner,{"left":-841},600,function(){
			topBanner.style.left = 0;
			topBannerImgs[0].src = arrImg[num];
		});
	};

	//点击前后按钮切换banner
	var bannerPrev = document.querySelector(".tabwindow .previous a");
	var bannerNext = document.querySelector(".tabwindow .next a");
	var tabBtns = document.querySelectorAll(".tabwindow .tabbtns a");

	bannerNext.onclick = function (){
		bannerNum++;
		if ( bannerNum === arrImg.length){
			bannerNum = 0;
		}
		topBannerImgs[0].src = arrImg[bannerNum];
		btnsTab(bannerNum);
	}

	bannerPrev.onclick = function (){
		bannerNum--;
		if ( bannerNum<0 ){
			bannerNum = arrImg.length-1;
		}
		topBannerImgs[0].src = arrImg[bannerNum];
		btnsTab(bannerNum);
	}

	function btnsTab(a){
		for (var i = 0; i < tabBtns.length; i++) {
			tabBtns[i].className = "";
		}
		tabBtns[a].className = "a1";
	}
    //点击小圆点切换banner
    for (var i = 0;i<tabBtns.length;i++){
        tabBtns[i].index = i;
        tabBtns[i].onclick = function () {
            bannerNum = this.index;
            topBannerImgs[0].src = arrImg[bannerNum];
            btnsTab(bannerNum);
        }
    }

	//背景换肤
	var changeBgBtns = document.querySelectorAll(".tabbgc a");
	var header = document.getElementById('header');
	var logo = document.querySelector(".headercontent .logo");
	var bgNum = 0;

	for (var i = 0; i < changeBgBtns.length; i++) {
		changeBgBtns[i].index=i;
		
		changeBgBtns[i].onmouseover = function (){
			this.className = "active";
		}

		changeBgBtns[i].onclick = function (){
			bgNum = this.index;
			clearBg(bgNum);
		}
		changeBgBtns[i].onmouseout = function (){
			clearBg(bgNum);
		}
	}

	changeBgBtns[0].addEventListener("click",function(){
		clearBg(0);
		document.body.style.backgroundImage = "url(img/bj1.png)";
		header.style.backgroundImage = "url(img/headerbg1.png)";
		logo.style.backgroundImage = "url(img/logo1.png)";
	});	
		
	changeBgBtns[1].addEventListener("click",function(){
		clearBg(1);
		document.body.style.backgroundImage = "url(img/bj2.jpg)";
		header.style.backgroundImage = "url(img/headerbg2.png)";
		logo.style.backgroundImage = "url(img/logo2.png)";
	});

	changeBgBtns[2].addEventListener("click",function(){
		clearBg(2);
		document.body.style.backgroundImage = "url(img/bj3.jpg)";
		header.style.backgroundImage = "url(img/headerbg3.png)";
		logo.style.backgroundImage = "url(img/logo3.png)";
	});
	
	function clearBg(bgNum){
		for (var i = 0; i < changeBgBtns.length; i++) {
			changeBgBtns[i].className = "";
		}
		changeBgBtns[bgNum].className = "active";
	}

	//本页跳转
	var tabbtn1 = document.getElementById("tabbtn1");
	var tabHeader = document.querySelectorAll(".headercontent .nav a");
    var contentSections = document.querySelectorAll("#concent > div");

	for (var i = 0; i < tabHeader.length; i++) {
		tabHeader[i].index = i;
		tabHeader[i].onmouseover = function (){
			tabbtn1.style.left = 134*(this.index)+"px";
		}
	}

	function getDis(element){
		var y = element.getBoundingClientRect().top;
		y += document.documentElement.scrollTop || document.body.scrollTop;
		return y;
	}
    //web-design-works的选项卡切换
    var k = 0;
    var works = document.querySelectorAll(".web-design-works>div");
    var webnavs = document.querySelectorAll(".webnav a");
    for (var i = 0; i < webnavs.length; i++) {
    	webnavs[i].index = i;
    	webnavs[i].onclick = function (){
    		for (var i = 0; i < webnavs.length; i++) {
    			webnavs[i].parentNode.className = "";
    			works[i].className = "";
    		}
    		webnavs[this.index].parentNode.className = "allweb";
    		works[this.index].className = "active";
    		k=this.index;
    		big(k);
    	}
    }
    var bigImgs=[
    	["img/白云寺.jpg","img/baby.jpg","img/smartbox.jpg","img/游戏网站1.jpg","img/游戏网站2.jpg","img/邵攀导演工作室.jpg"],
    	["img/baby.jpg","img/游戏网站1.jpg","img/游戏网站2.jpg","img/游戏网站1.jpg","img/游戏网站2.jpg","img/凤凰巢咖啡.jpg"],
    	["img/白云寺.jpg","img/baby.jpg","img/smartbox.jpg"],
    	["img/白云寺.jpg","img/baby.jpg","img/smartbox.jpg","img/游戏网站1.jpg","img/游戏网站2.jpg"],
    	["img/白云寺.jpg","img/baby.jpg","img/smartbox.jpg"]
    ];
    // 放大镜效果
    big(k);
    function big(k){
    	var webImgs = document.querySelectorAll(".web-design-works .active .webimg");
	    var mask = document.getElementById("mask");
	    var bigPicImgs = document.querySelectorAll(".big-pic img");
	    var imgs1 = document.querySelectorAll(".web-design-works .active .webimg .img1");
	    var webZooms = document.querySelectorAll(".web-design-works .active .webimg>div");
	    for (var i = 0; i < webZooms.length; i++) {
	    	webImgs[i].index=i;
	    	webZooms[i].a=i;
	    	webImgs[i].onmouseover = function(){
		    	imgs1[this.index].style.opacity  = 0;
		    	webZooms[this.index].style.top = "-122px";
	    	}
	    	webZooms[i].onclick = function (){
	    		mask.style.display = "block";
	    		bigPicImgs[0].src = bigImgs[k][this.a];
	    		bigPicImgs[1].onclick = function(){
	    			mask.style.display = "none";
	    		}
	    	}
		    webImgs[i].onmouseout = function(){
		    	imgs1[this.index].style.opacity  = 1;
		    	webZooms[this.index].style.top = "-245px";
		    }
    	}	
    }

    //aboutus切换选项卡
    var aboutNavLis = document.querySelectorAll(".aboutnav>li");
    var aboutNavMove = document.querySelector(".aboutnavmove");
    var aboutUl = document.querySelector("#aboutUl");
	for (var i = 0; i < aboutNavLis.length; i++) {
		aboutNavLis[i].index = i;
		aboutNavLis[i].onclick = function(){
			aboutNavMove.style["margin-left"] = (this.index)*80+"px";
			aboutUl.style.left = -(this.index)*827+"px";
		}  
	}
	
