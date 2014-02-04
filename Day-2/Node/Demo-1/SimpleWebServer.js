var http = require("http"),
	fs = require("fs"),
	fileName = "dummy.txt",
 	timer = undefined,
 	res = undefined;

function onConnection(req,response){
	res = response;
	timer = setInterval(function(){
		console.log("current time = " + new Date().toString());
	},1);
	console.log(req.url);
	if (!fs.existsSync(fileName)) {
		console.log("file does not exists");
	}
	console.log("file read Start", new Date( ));
	/* Async Version */
	
	fs.readFile(fileName,{
		encoding : 'utf-8'
	},handleFileContents);
	
	/* Sync Version */

	/*var fileContents = fs.readFileSync(fileName,{
		encoding : 'utf-8'
	});
	handleFileContents(undefined,fileContents)*/

	console.log("file read completed", new Date( ));
	//handleFileContents(undefined,fileContents,res);
}
function handleFileContents(err,fileContents){
		
		if (err){
			res.statusCode = 404;
		} else { 
			res.write(fileContents);
		}
		res.end();

		clearInterval(timer);
	}
var server = http.createServer(onConnection);

server.listen(8080);