var fs = require("fs");

var fileContents = fs.readFile("dummy.txt",{
	encoding : 'utf-8'
},function(err,fileContents){
	console.log(fileContents);
});
