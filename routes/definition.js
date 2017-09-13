var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res) {
	//variables
	    var runDate = req.body.definition.runDate; //
        var miles = req.body.definition.miles; //
        var minutes = req.body.definition.minutes;  //changed var names and to definition.minutes

	//methods
	Definition
	//objects must match the model 
	.create({ 
	   	runDate: runDate,  // changed description
	   	miles: miles,  // changed logType
	   	minutes: minutes  // changed from owner
	   })

		.then(
				function createSuccess(definition) {
				//send a response as json
		   		res.json({
		   			definition: definition
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});

router.get('/', function(req, res) {
	//user variable
	var userid = req.user.id;
	Definition
	//findAll by owner method
	.findAll({
		where: { owner: userid }
	})
	.then(
		//success
		function findAllSuccess(data) {
			// console.log(data);
			res.json(data);
		},
		//failure
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});

module.exports = router;