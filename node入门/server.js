const http = require("http");

http.createServer(function(request,response){
	response.setHeader("Content-Type","text/html;charset=UTF-8");
	response.write("你好");
	response.end();
}).listen(8888)
