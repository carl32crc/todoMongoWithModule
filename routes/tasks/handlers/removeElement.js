var ObjectID = require('mongodb').ObjectID;

function removeElement(db,req,res){
	var idToRemove = req.query.id;
	var collection = db.collection('tasks');
	collection.deleteOne({
			_id:ObjectID(idToRemove)
		},function(){
		  res.end();
	});
}

module.exports = removeElement;