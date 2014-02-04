var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path"),
	storage = require("./TaskStorage");

storage.add("Learn jQuery");
storage.add("Master JavaScript");

function onStart(portNo){
	portNo = portNo || 9090;
	var httpServer = http.createServer(onConnection);
	httpServer.listen(portNo);
}

function onConnection(request,response){
	console.log(url.parse(request.url).pathname);
	if ((url.parse(request.url).pathname).indexOf("/static") == 0)
		return serveStatic(request,response);
	return serveData(request,response);
}

function serveData(request,response){
	var reqPath = url.parse(request.url).pathname;
	switch (reqPath){
		case "/Tasks":
			response.write(JSON.stringify(storage.getAll()));
			response.end();
			break;
		case "/Tasks/Add" :
			extractData(request,function(taskAsString){
				var task = JSON.parse(taskAsString);
				response.write(JSON.stringify(storage.add(task.taskName)));
				response.end(); 	
			});
			
			break;
	}
}

function extractData(request,callback){
	var data = "";
	request.on("data",function(chunk){
		data += chunk;
	});
	request.on("end",function(){
		callback(data);
	})
}

function serveStatic(request,response){
	var fileName = path.join(__dirname, url.parse(request.url).pathname);
	var stream = fs.createReadStream(fileName, {encoding : "utf-8"});
/*	stream.on("data",function(chunk){
		response.write(chunk);
	});
	stream.on("end",function(){
		response.end();
	});
*/
	stream.pipe(response);
}

module.exports.start = onStart;