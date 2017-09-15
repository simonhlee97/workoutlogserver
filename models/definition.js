module.exports = function(sequelize, DataTypes) {
//With define, the first argument is going to represent a column in the db table
		return sequelize.define('definition', {
			owner: DataTypes.INTEGER,
			runDate: DataTypes.DATEONLY,  //changed description to runDate
			miles: DataTypes.DECIMAL, /*  ... changed key logType to miles, and STRING to FLOAT */
			minutes: DataTypes.INTEGER,
			pace: DataTypes.DECIMAL,
			calories: DataTypes.INTEGER
			  // changed key to minutes
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