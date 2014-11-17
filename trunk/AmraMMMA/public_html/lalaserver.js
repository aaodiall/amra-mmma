var http = require('http');
var fs = require('fs');
var util = require('util');
var express = require('express');

var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);

var server = http.createServer(app);

//déclaration des dossiers utilisés
app.use(express.static(__dirname + '/'));

//téléchargement de la première page
app.get('/', function(req, res) {
   fs.readFile('./index.html', 'utf-8', function(error, content) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(content);
	});
});

io.sockets.on('connection', function (socket) {
    console.log('Connexion !!!');
    
});