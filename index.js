var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(3001, function(){
	console.log("listening at port 3001");
})

app.use(express.static('public'));

var io = socket(server);
io.on('connection', function(socket){
	console.log('made socket connection', socket.id);
	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});
});