var http = require('http');

function start() {
	function onRequest(request, response) {
		console.log("request received"); 
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	}
	
	http.createServer(onRequest).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');
}

exports.start = start;