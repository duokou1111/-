$(".streamer-left-li").click(function(){
	$(".streamer-left img[ty!='active']").css("display","block")
	$(".streamer-left img[ty='active']").css("display","none")
	$(".streamer-left .streamer-left-li-text").css("color","#333333")
	$(this).find("img[ty='active']").css("display","block");
	$(this).find("img[ty!='active']").css("display","none");
	$(this).find(".streamer-left-li-text").css("color","#FF5D23");
})
$(".streamer-left-li,.streamer-left-play-btn").click(function(){
	var src = $(this).attr("ifr");
	$("iframe").attr("src",src).show();
	var iframe = parent.document.getElementById("iframe");
	if (iframe.attachEvent){
	    iframe.attachEvent("onload", function(){
	        initIframeHeight(0);
	    });
	} else {
	    iframe.onload = function(){
	         initIframeHeight(0);
	    };
	}

})
function init(){
	goToHomeIfNotLogin();
}
window.onload = function () {
	initIframeHeight(0)
};
function initIframeHeight(height){
    var userAgent = navigator.userAgent;
    var iframe = parent.document.getElementById("iframe");
    var subdoc = iframe.contentDocument || iframe.contentWindow.document;
    var subbody = subdoc.body;
    var realHeight;
    //谷歌浏览器特殊处理
    if(userAgent.indexOf("Chrome") > -1){
        realHeight = subdoc.documentElement.scrollHeight;
    }
    else{
        realHeight = subbody.scrollHeight;
    }
    if(realHeight < height){
        $(iframe).height(height);
    }
    else{
        $(iframe).height(realHeight);
    }
}
init();