var get = (req, res, db, id) => {
	if(id) {
		// TODO
		// find the host from db
		res.json({id: id});		
	} else {
		db.fetchAllHosts((data) => {
			res.json(data);
		})	
	}
}

var post = (req, res, db) => {
	//console.log('body...',req.body);
	var hostData = req.body.data;
	// TODO add cb
	// db.insertIntoHost(hostData, (err, data) => {
	// 	var successMsg = {"message": "Thanks for hosting your wifi with us"}
	// 	res.json(successMsg);			
	// });
	db.insertIntoHost(hostData, (data) => {
		//var successMsg = {"message": "Thanks for hosting your wifi with us"}	
		res.json(data);	
	});
			
}

var put = (req, res) => {
	var hostId = req.params['hostId'];
	var host = req.body;
	//TODO 
	// save the new host info to db
	res.json({id: hostId});
}

var destroy = (req, res) => {
	//TODO 1. get the host info from db, delete it
	res.json({id: req.params['hostId']});
}


module.exports.get = get;
module.exports.put = put;
module.exports.post = post;
module.exports.delete = destroy;