module.exports = function(sequelize, DataTypes) {
//With define, the first argument is going to represent a column in the db table
		return sequelize.define('account', {
			name: DataTypes.STRING,
			weight: DataTypes.STRING,
			sex: DataTypes.STRING,
			zip: DataTypes.STRING,
		},{
	});
};
/*
POSTMAN TEST:
{
	"definition":{
		"description":"Running my heart out as fast I could for 70 miles.",
		"logType":"sprints"
	}
}
*/