var socket = io.connect('http://localhost:3001');

var message = document.getElementById('message'),
	btn = document.getElementById('send'),
	output = document.getElementById('output');
	handle = "Anna";
btn.addEventListener('click', function () {
	socket.emit('chat',{
		message: message.value,
		handle: handle,
	});
	message.value = "";
});

socket.on('chat', function (data) {
	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});