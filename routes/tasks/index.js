var express = require('express');

var insertTasks = require('./handlers/insertTasks');
var removeElement = require('./handlers/removeElement');
var showTasksFalse = require('./handlers/showTasksFalse');
var showTasksTrue = require('./handlers/showTasksTrue');
var updateAllTask = require('./handlers/updateAllTask');
var updateOneTask = require('./handlers/updateOneTask');

var router = express.Router();

function getRouter(db) {


	console.log("-------------------getRouter ok------------------------");
	router.get('/tasks', function(req,res) {
		console.log("-------------------get Task------------------------");
		showTasksFalse(db,req,res);
	})

	router.get('/completed', function(req,res) {
		console.log("-------------------get Completed------------------------");
		showTasksTrue(db, req, res);
	})

	router.post('/tasks', function(req,res) {
		console.log("-------------------Post Task------------------------");
		insertTasks(db, req, res);
	})

	router.put('/tasks', function(req,res) {
		console.log("-------------------Put Task------------------------");
		updateOneTask(db, req, res);
		updateAllTask(db, req, res);
	})

	router.delete('/tasks', function(req,res) {
		console.log("-------------------delete Task------------------------");
		removeElement(db, req, res);
	})

	//router.get('/', getAll.bind(null, db) )


	return router;

}

module.exports = getRouter;