function showTasksFalse(db,req,res){
  var collection = db.collection('tasks');
  collection.find({ completed: false })
		.toArray(function(err, pendingTasks) {
			//if (err) throw err;
			res.render('tasks', {
		    title: 'Todo List',
		    currentUrl: '/tasks',
		    tasks: pendingTasks
		  });
		});
}

module.exports = showTasksFalse;
