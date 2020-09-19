var Tag;
var isTagShow = false;
function init(){
	goToHomeIfNotLogin();
	getTagRequest(addTags);
}
function addTags(result){
	var result = JSON.parse(result);
	Tag = result;
	 for(var i=0;i<result.length;i++){
		if(result[i].pid == 0){
			addParentTag(result[i]);
		}
	} 
	$(".classification-left-li").eq(1).click();
}
function showChildTag(pid){
	$(".classification-right-content").empty();
	for(var i=0;i<Tag.length;i++){
		var template = $($(".classification-right-content-demo").html());
		if(Tag[i].pid == pid){
			template.find("span").html(Tag[i].name);
			template.attr("id",Tag[i].id);
			$(".classification-right-content").append(template);
		}
	} 
}
function addParentTag(result){
	var clone = $($(".classification-left-li-demo").html());
	clone.find(".classification-left-li-span").html(result.name)
	clone.attr("pid",result.id);
	$(".classification-left").append(clone);
}
 $('#room').keyup(function(){
     var tmptxt=$(this).val().replace(/\D|^0/g,'');
     $(this).val(tmptxt);
 });
 $(".cover").click(function(){
	 $("#cover-input").click();
 })
 $("#cover-input").on("change",function(){
         var reads = new FileReader();
         var f = $(this).get(0).files[0];
         var rep = /jpeg|png|gif|bmp/ig;
         var gstyle = f.type.split("/")[1];
         if(rep.test(gstyle)){
             reads.readAsDataURL(f);
             var that = this;
             reads.onload = function(e) {
                 $("#cover-img").attr("src",this.result)
				 $("#cover-img").show();
				 $("#tmp").hide();
				 $(".cover-text").hide();
             };
         }else{
			 $(".msg").html("图片格式不正确，请上传正确格式的图片")
			 $(".msg").fadeIn();
			 setTimeout(" $('.msg').fadeOut()",1200);
         }
 
     });
$("body").on('click',".classification-right .classification-left-li",function(){
	var text = $(this).find("span").html();
	 $("#tag-input-box").html(text); 
	 $("#tag-input-box").attr("idNum",$(this).attr("id"))
	 $(".classification").fadeOut();
	 isTagShow = false;
}); 
$("body").on('click',".classification-left .classification-left-li",function(){
	$(".classification-left .classification-left-li").find("span").css("color","#333333");
	$(".classification-icon").css("color","#CCCCCC");
	$(this).find("span").css("color","#EE7801");
	showChildTag($(this).attr("pid"));
})
$("#tag-input-box").click(function(){
	if(isTagShow == false){
		$(".classification").fadeIn();
		isTagShow = true;
	}else{
		$(".classification").fadeOut();
		isTagShow = false;
	}
})
$("#start").click(function(){
	
})
init();
