var Sequelize = require('sequelize');
// var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postByoungEun2014@localhost:5432/workoutlog', {
// 	dialect: 'postgres'
// });
// for local development, change 2-4 to below:
let sequelize = new Sequelize('workoutlog', 'postgres', 'postByoungEun2014',{
	host: 'localhost',
	dialect: 'postgres'
});


sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

var User = sequelize.import('./models/user');

module.exports = sequelize;