function insertTasks(db,req,res){
	var newTask = {
				name: req.body.name,
				completed: false,
				createTime: new Date()
			};

  var collection = db.collection('tasks');
  collection.insert(newTask);
}

module.exports = insertTasks;