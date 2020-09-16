var BASE_URL = "http://127.0.0.1:8080"
var INDEX_URL = "http://127.0.0.1/Dougou/index.html"
var DOMAIN = "127.0.0.1"
var PATH = "/Dougou"
function isLogin(){
	return $.cookie('token')!=null
}
function removeCookie(name){
	$.removeCookie('token',{domain:DOMAIN,path:PATH});
}