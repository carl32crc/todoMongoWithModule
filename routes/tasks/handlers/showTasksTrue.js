function showTasksTrue(db,req,res){
  var collection = db.collection('tasks');

  collection.find({ completed: true })
		.toArray(function(err, completedTasks) {
			//if (err) throw err;
			res.render('completed', {
		    title: 'Completed',
		    tasks: completedTasks
		  });
		});
}

module.exports = showTasksTrue;
