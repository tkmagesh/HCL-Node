var fs = require("fs");
var rStream = fs.createReadStream("./dummy.txt",{encoding : "utf-8"});
var n=0;
rStream.on("data",function(chunk){
	console.log(++n + " st/nth chunk");
	console.log(chunk);
});
rStream.on("end",function(){
	console.log("read completed with " + n + " chunks");
});