function updateAllTask(db,req,res){

	var collection = db.collection('tasks');

	collection.update(
			{ completed: false },
			{ $set :
				{
					completed: true,
					completeTime: new Date()
				}
			},
			{ multi : true },
			function(){
				res.end();
		});
}

module.exports = updateAllTask;