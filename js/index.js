
$(".index-top-video-right-box").hover(function(){
	$(".index-top-video-right-box").removeClass("active");
	$(this).addClass("active");
},function(){
$(".index-top-video-right-box").removeClass("active");
});
$(".index-top-video-right-box").click(function(){
	$(".index-top-video-right-box").removeClass("index-top-video-right-onplay");
	$(this).addClass("index-top-video-right-onplay");
});
$(".index-top-video-left-enter").hover(function(){
	$(this).css("background","#FE7801").css("color","#FFF").css("transition","background,color 0.4s");
},function(){
	$(this).css("background","rgba(7,7,7,0.45)").css("color","#FE7801").css("transition","background,color 0.4s");
});
$(".index-top-video-left").hover(function(){
	$(".index-top-video-left-enter").fadeIn();
},function(){
	$(".index-top-video-left-enter").fadeOut();
});
$("#videoElement").click(function(){
	var url ="http://39.97.172.21/live?port=1935&app=myapp&stream=wzh";
	if (flvjs.isSupported()) {
	    var videoElement = document.getElementById('videoElement');
	    var flvPlayer = flvjs.createPlayer({
	        type: 'flv',
					   enableWorker: true, 
					   isLive: true,                  
					   hasVideo: true,
					   stashInitialSize: 128,  
					   enableStashBuffer: false,
	        url: 'http://39.97.172.21/live?port=1935&app=myapp&stream=wzh'
	    });
	    flvPlayer.attachMediaElement(videoElement);
	    flvPlayer.load();
	    flvPlayer.play();
	}
})
$("#videoElement").click();
$("#index-search-input").focus(function(){
	$(".index-search-box").css("width","200px").css("transition","0.4s all");
})
$("#index-search-input").blur(function(){
	$(".index-search-box").css("width","160px").css("transition","0.4s all");
})
$(".index-avator-box").click(function(){
	$(".index-mask").fadeIn();
	$(".index-login-box").fadeIn();
})
$(".index-login-box-close").click(function(){
	$(".index-login-box").fadeOut();
	$(".index-mask").fadeOut();
})
$(".index-login-box-btn").click(function(){
	var username = $("#username").val();
	var password = $("#pwd").val();
	loginRequest(username,md5(password),afterLoginRequest)
})
$("#index-logout").click(function(){
	removeCookie("token");
	location.reload();
})
function afterLoginRequest(isSuccess,data){
	if(isSuccess ==  true){
		console.log(data.status);
		$(".index-login-box-msg").show();
		$(".index-login-box-msg").html("登录成功!");
		setTimeout("location.reload()",1000); 
	}else{
		console.log(data.status);
		console.log(data.responseText);
		var obj = JSON.parse(e.responseText)
		$(".index-login-box-msg").show();
		$(".index-login-box-msg").html(obj.message);
		$(".index-login-box-msg").fadeOut(3000)
	}
}
function loginFinish(){
	$(".index-user-bar").show();
	$('.index-login-box-msg').fadeOut();
	$(".index-mask").hide();
	$(".index-login-box").hide();
}
var flag = false;
function init(){
	if(isLogin()){
		loginFinish();
		$(".index-avator-box").hover(function(){
			$(".index-user-box").css("opacity","1").css("width","300px").css("height","260px"); 
		},function(){
			 setTimeout("hideUserBox()",50); 
		})
		$(".index-user-box").hover(function(){flag = true},function(){$(".index-user-box").css("opacity","0");flag = false;})
	}
}
function hideUserBox(){
	if(flag == false){
		$(".index-user-box").css("opacity","0").css("width","50px").css("height","50px");
	}
}
init();