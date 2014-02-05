var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path");
	

function onStart(portNo){
	portNo = portNo || 8085;
	var httpServer = http.createServer(onConnection);
	httpServer.listen(portNo);
}

function onConnection(request,response){
	var fileName = path.join(__dirname, url.parse(request.url).pathname);
	if (!fs.existsSync(fileName)){
		response.writeHead(404);
		response.end();
	} else {
		var stream = fs.createReadStream(fileName, {encoding : "utf-8"});
		stream.pipe(response);	
	}
	
}

onStart(8080);
