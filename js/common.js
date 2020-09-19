var BASE_URL = "http://127.0.0.1:8080"
var BASE_FRONT_URL = "http://127.0.0.1:8848/Dougou";
var DOMAIN = "127.0.0.1"
var PATH = "/Dougou"

function isLogin() {
	return $.cookie('token') != null
}

function removeCookie(name) {
	$.removeCookie('token', {
		domain: DOMAIN,
		path: PATH
	});
}

function getTokenHeader() {
	var header = new Object();
	header['token'] = $.cookie('token');
	return header;
}

function goToHomeIfNotLogin() {
	if (isLogin() == false) {
		self.location = BASE_FRONT_URL + "/index.html";
	}
}
