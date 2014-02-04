var http = require("http"),
	fs = require("fs"),
	url = require("url"),
	path = require("path");

http.createServer(onConnection).listen(8080);

function onConnection(req,res){
	var reqUrl = url.parse(req.url,true);
	var pathName = reqUrl.pathname;
	console.log(reqUrl.pathname);
	var number1 = parseInt(reqUrl.query.number1);
	var number2 = parseInt(reqUrl.query.number2);
	console.log(number1 + number2);
	//var fileName = path.join(__dirname , req.url);

	res.end();
}