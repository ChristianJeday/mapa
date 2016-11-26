var express=require('express');
var app=express();
var http=require('http').Server(app);

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
