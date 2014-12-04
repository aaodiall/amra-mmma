/**
 * Module dependencies.
 */
var express = require('express');
//var routes = require('./routes');
var  bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
//load user route
var user = require('./routes/user');
var app = express();
var connection = require('express-myconnection');
var mysql = require('mysql');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res){
  res.sendFile(__dirname + '/index1.html');

});
app.post('/', user.save);
app.get('/:id', user.get);




http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});