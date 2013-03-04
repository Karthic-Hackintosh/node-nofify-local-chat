var net = require('net');
var client = new net.Socket();

client.setEncoding('utf-8');
client.connect('8124','127.0.0.1',function() {
	console.log('Connected to the server');
	});

process.stdin.resume();
process.stdin.on('data',function(data) {
	client.write(data);
	});
client.on('data',function(data) {
	console.log(data);
	});
client.on('close',function() { 
	console.log('connection is closed');
	});
