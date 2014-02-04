var ws = require("nodejs-websocket");
var server = ws.createServer(function(con){
	console.log("A new connection is established");
	var counter = 0;

	con.on("text",function(msg){
		console.log("Msg received - ", msg);
		if (msg === "start"){
			var timer = setInterval(function(){
				con.sendText("Time = " + new Date().toString());
				if (++counter >= 10) clearInterval(timer);
			},10000);
		}
	});
	con.on("close",function(){
		console.log("An existing connection is closed");
	})
});
server.listen(9090);
