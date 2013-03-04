var net = require('net');
var exec = require('child_process').exec , child;
var server = net.createServer(function(conn) { 
	console.log('Connected with the Client');
	
	conn.on('data',function(data) {
		console.log(data + 'from' + conn.remoteAddress + ' ' + 'PORT:' + conn.remotePort);
		var msg = "notify-send" + " " + data;
		child = exec('notify-send test',function (error, stdout, stderr) {
			 console.log('stderr: ' + stderr);
    			if (error !== null) {
      				console.log('exec error: ' + error);
    			}		
		});
	conn.write('Successfully sent....');
	});
	conn.on('close',function() {
		console.log('Terminated');
	});

}).listen(8124);
