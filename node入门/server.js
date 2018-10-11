const http = require("http");

http.createServer(function(request,response){
			response.writeHead(200,{
				'Content-Type':'text/plain;charse=utf-8'}
			);
			response.write('这个中文可以看懂吗？');
			response.end();
	}).listen(8888)
