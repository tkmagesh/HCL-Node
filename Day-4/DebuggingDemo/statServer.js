var http = require('http');
function handleRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Debugging Demo\n');
}
http.createServer(function (req, res) {
	debugger;
	handleRequest(req, res);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');