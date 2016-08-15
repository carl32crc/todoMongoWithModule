var express = require('express')
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var jade = require('jade')
var bodyParser = require('body-parser')
var app = express();
var url = 'mongodb://localhost:27017/tasks';
var publicFolder = __dirname + '/public';
var showTasksFalse = require('./routes/tasks/handlers/showTasksFalse');
var showTasksTrue = require('./routes/tasks/handlers/showTasksTrue');
var insertTasks = require('./routes/tasks/handlers/insertTasks');
var removeElement = require('./routes/tasks/handlers/removeElement');
var updateAllTask = require('./routes/tasks/handlers/updateAllTask');
var updateOneTask = require('./routes/tasks/handlers/updateOneTask');

app.locals.moment = require('moment');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))
app.use( express.static(publicFolder) )


MongoClient.connect(url, function(err, db) {


	app.get('/tasks', function(req,res) {
		showTasksFalse(db,req,res);
	})
	app.post('/tasks', function(req,res) {
		insertTasks(db,req,res);
		res.redirect('/tasks');
	})
	app.get('/completed', function(req,res) {
		showTasksTrue(db,req,res);
	})
	app.put('/tasks', function(req,res) {
		var idTask = req.query.id;
		if(idTask!==undefined){
			updateOneTask(db,idTask,res);
		}else{
			updateAllTask(db,idTask,res);
		}
	})
	app.delete('/tasks', function(req,res) {
		removeElement(db,req,res);
	})
	app.listen(3000, function() {
		console.log("Listening on port 3000");
	})
});