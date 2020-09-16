$(".streamer-left-li").click(function(){
	$(".streamer-left img[ty!='active']").css("display","block")
	$(".streamer-left img[ty='active']").css("display","none")
	$(".streamer-left .streamer-left-li-text").css("color","#333333")
	$(this).find("img[ty='active']").css("display","block");
	$(this).find("img[ty!='active']").css("display","none");
	$(this).find(".streamer-left-li-text").css("color","#FF5D23");
})
function init(){
	if(isLogin() == false){
		self.location=INDEX_URL; 
	}
}