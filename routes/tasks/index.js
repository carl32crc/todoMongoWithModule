var express = require('express');

var insertTasks = require('./handlers/insertTasks');
var removeElement = require('./handlers/removeElement');
var showTasksFalse = require('./handlers/showTasksFalse');
var showTasksTrue = require('./handlers/showTasksTrue');
var updateAllTask = require('./handlers/updateAllTask');
var updateOneTask = require('./handlers/updateOneTask');

var router = express.Router();

function getRouter(db) {


	router.get('/tasks', function(req,res) {
		showTasksFalse(db,req,res);
	})
	router.post('/tasks', function(req,res) {
		insertTasks(db,req,res);
		res.redirect('/tasks');
	})
	router.get('/completed', function(req,res) {
		showTasksTrue(db,req,res);
	})
	router.put('/tasks', function(req,res) {
		var idTask = req.query.id;
		if(idTask!==undefined){
			updateOneTask(db,idTask,res);
		}else{
			updateAllTask(db,idTask,res);
		}
	})
	router.delete('/tasks', function(req,res) {
		removeElement(db,req,res);
	})

	//router.get('/', getAll.bind(null, db) )


	return router;

}

module.exports = getRouter;