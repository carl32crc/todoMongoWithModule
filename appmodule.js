var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');

var routerTasks = require('./routes/tasks');
var PORT = process.env.PORT || 3000;

var app = express();

app.locals.moment = require('moment');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));

app.use( require('less-middleware')(path.join(__dirname, 'public')) );
app.use( express.static(path.join(__dirname, 'public')) );

var url = 'mongodb://localhost:27017/tasks';

MongoClient.connect( url, function(err, db) {

	app.use ('/', routerTasks(db) );

	app.get ('/', function(req, res) {
		res.redirect('/tasks');
	} );

	app.all('*', function(req, res){
	  res.status(404).send();
	})

	app.listen( PORT, function(){
	  console.log('Express server listening on port ' + PORT);
	});

} )
