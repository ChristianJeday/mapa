var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);
//usando socket io
var io=require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

var port=process.env.PORT || 3000; //esto lo exige heroku

app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html'); //ruta pagina index

});

http.listen(port, function(){//redirigiendo
	console.log('Escuchando en el puerto: ' +port);

});

var socketCount = 0; //Contador de conexiones al server
io.on('connection', function()){
      console.log('Usuario conectado...');
	socketCount++;

//emitiendo mensaje a todos los socketsno usuarios conectados
	io.sockets.emit('usuario conectado', socketCount);
      
      });//cierra conexion

socket.on('disconnect', function(){
	socketCount--;//decremento del contador
	console.log('Usuario Desconectado');//mensaje en consola
	io.socket.emit('usuario desconectado');//mensaje a todos los sockets
});
