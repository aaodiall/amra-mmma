var http = require('http');
var express = require('express');
var app = express();
var server = app.listen(3001);
var io = require('socket.io').listen(server);
var connection = require('express-myconnection');
var mysql = require('mysql');
var  bodyParser = require('body-parser');
var path = require('path');
//load user route
var user = require('./routes/user');
var server = http.createServer(app);


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});