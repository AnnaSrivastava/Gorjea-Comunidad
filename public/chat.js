var socket = io.connect('http://localhost:3001');

var message = document.getElementById('message'),
	btn = document.getElementById('send'),
	output = document.getElementById('output'),
	handle_1 = document.getElementById('handle'),
	handle = handle_1.value==='' ? "Anon" : handle_1,
	feedback = document.getElementById('feedback'),
	otp = document.getElementById('otp');
btn.addEventListener('click', function () {
	socket.emit('chat',{
		message: message.value,
		handle: handle,
	});
	message.value = "";
});

message.addEventListener('keypress', function () {
	socket.emit('typing', handle);
})

socket.on('chat', function (data) {
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function () {
	feedback.innerHTML = '<p><em>' + data + 'is typing...</em></p>';
})