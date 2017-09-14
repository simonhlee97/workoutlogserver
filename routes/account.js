var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Account = sequelize.import('../models/account');

router.post('/', function(req, res) {
	//variables
		var name = req.body.account.name;
		var weight = req.body.account.weight;
		var sex = req.body.account.sex;
		var zip = req.body.account.zip;

	//methods
	Account
	//objects must match the model 
	.create({
		name: name,
		weight: weight,
		sex: sex,
		zip: zip
	   })

		.then(
				function createSuccess(account){
				//send a response as json
		   		res.json({
		   			account: account
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
	Account
	//findAll by owner method
	.findAll({
		where: { id: userid }
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTA1MzMwNTE2LCJleHAiOjE1MDU0MTY5MTZ9.LiccpZ-rFqSioOx99QWqt_C1s3rV54Z7xWAdI_DiYpI

module.exports = router;