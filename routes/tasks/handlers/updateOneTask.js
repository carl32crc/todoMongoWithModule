var ObjectID = require('mongodb').ObjectID;

function updateOneTask(db,req,res){
	var collection = db.collection('tasks');
	collection.update(
			{ _id: ObjectID(req) },
			{ $set :
				{
					completed: true,
					completeTime: new Date()
				}
			},function(){
				res.end();
		});
}

module.exports = updateOneTask;