var ws = require("nodejs-websocket");
var server = ws.createServer(function(con){
	 
	con.on("text",function(msg){
		var msgObj = JSON.parse(msg);
		var msgData = msgObj.data;
		switch(msgObj.type){
			case "login":
				var nickName = msgData.nickName;
				con.nickName = nickName;
				con.sendText(JSON.stringify({
					type : "loginResponse",
					data : {
						whoAmI : getConnectionInfo(con),
						existingUsers : getRollCall()
					}
				}));
				var loginMessage = {
					type : "loggedIn",
					data : {
						key : con.key,
						nickName : nickName
					}
				};     
				broadCast(JSON.stringify(loginMessage),con.key);
				break;
			case "send":
				var msg = msgData.msg;
				var serverResponse = {
						type : "message",
						data : {
							from : getConnectionInfo(con),
							msg : msg,
						}
				}
				var serverResponseInString = JSON.stringify(serverResponse);
				if (msgData.to === "All"){
					broadCast(serverResponseInString);
				}
				else {
					getConnectionByKey(msgData.to).sendText(serverResponseInString)
				}

			case "logout":
				break;
		}
	});
	con.on("close",function(){
		console.log("An existing connection is closed");
	})
});
function getRollCall(){
	return server.connections.map(function(cn){
		return {
			key : cn.key,
			nickName : cn.nickName
		};
	});
}
function getConnectionByKey(key){
	return server.connections.filter(function(cn){
		return cn.key === key
	})[0];
}
function getConnectionInfo(con){
	return { key : con.key, nickName : con.nickName};
}
function broadCast(msg,keyToIgnore){
	keyToIgnore = keyToIgnore || "";
	server.connections.forEach(function(cn){
		if (keyToIgnore !== cn.key)
			cn.sendText(msg);
	});
}
server.listen(9090); 
 
//Use Cases 

//Login - nickname
//Target a message to a particular user
//Logout should notify other users

/*
Msg From Client
===============
Login (nickname)
Send (msg)
Logout()

Msg From Server
================
rollcall(connectionInfo[])
loggedIn(connectionInfo)
loggedOut(connectionInfo)
message(msg)

connectionInfo (id,nickname)
socketMsg (type, data)
*/
