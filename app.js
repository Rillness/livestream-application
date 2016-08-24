var app = require('express')();
var server = require('http').Server(app);
var io =  require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

var usr = [];

console.log(usr.length);
io.on('connection', function(socket){

  //When you enter a connection. 'myId' is the emitting socket that pushes, the length of the usr array into the usr array.
	socket.emit('myId', usr.length);
	usr.push(usr.length);

	io.emit('createUsers', usr);


	socket.on('part', function(data){
		socket.emit('part', data);
	});

	socket.on('updateImage', function(data){
		socket.broadcast.emit('updateImage',data);
	});

	socket.on('disconnect', function () {

  	});
});



server.listen('3000', function(){
  console.log('Listening on Port 3000');
});
