function getTagRequest(callback) {
	$.ajax({
		type: "get",
		url: BASE_URL+"/tag/all",
		headers:getTokenHeader(),
		success: function(result, status, xhr) {
			console.log("?")
			callback(result);
		},
		error: function(e) {
			alert("系统繁忙，请稍后再试");
		}
	}); 
}
