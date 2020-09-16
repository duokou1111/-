function loginRequest(username,password,callback){
	var form = new FormData();
	form.append("username",username);
	form.append("password",password);
	 $.ajax({
	            type : "post",
	            url : BASE_URL+"/user/login",
	            data : form,
				processData:false,
				contentType:false,
	            success : function(result,status,xhr) {
	               callback(true,result);
				   var date = new Date();
				   date.setTime(date.getTime()+3*1000*60*60);
				   $.cookie('token',xhr.getResponseHeader("token"), {expires: date});
	            },
	            error : function(e){
	              callback(false,result);
	            }
	        });
}