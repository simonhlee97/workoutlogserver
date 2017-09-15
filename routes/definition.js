var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.delete('/', function(req, res) {
	var data = req.body.definition.id;
	Definition
		.destroy({
			where: { id: data }
		}).then(
			function deleteLogSuccess(data){
				res.send("you removed a log");
			},
			function deleteLogError(err){
				res.send(500, err.message);
			}
		);
});

router.post('/', function(req, res) {
	//variables
		var owner = req.user.id;
	    var runDate = req.body.definition.runDate; //
        var miles = req.body.definition.miles; //
        var minutes = req.body.definition.minutes;
        
        var pace = req.body.definition.pace;
        var calories = req.body.definition.calories; 

	//methods
	Definition
	//objects must match the model 
	.create({
		owner: owner,
		runDate: runDate,
	   	miles: miles,  
	   	minutes: minutes,
	   	pace: pace,
	   	calories: calories
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