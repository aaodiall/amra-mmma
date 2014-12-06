/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
//load user route
var user = require('./routes/user');
var activity = require('./routes/activity');
var app = express();
var connection = require('express-myconnection');
var mysql = require('mysql');
// all environments
app.set('port', process.env.PORT || 3001);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/')));




app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

});
app.post('/', function(req, res){
  console.log("ici " +JSON.stringify(req.body));
  res.send(JSON.stringif('{result:"1"}'));
  res.send(JSON.stringify(req.body));
});

app.get('/:type/:id_user',activity.all_activity_by_user);

app.get('/:type',activity.all_activity);

app.post('/createActivity',activity.create);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
