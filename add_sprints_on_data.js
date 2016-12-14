
var utils = require('./utils.js');

function addSprintsOnData (sprints, data) {
	for (var i = sprints.length - 1; i >= 0; i--) {
		var sprint = sprints[i]

		sprint.type      = 'sprint'
		sprint.hierarchy = 1
		sprint.startDate = utils.dateToddmmyyyy(new Date(sprint.startDate))
		sprint.endDate   = utils.dateToddmmyyyy(new Date(sprint.endDate))
		data.splice(0, 0, sprint)
	}
}


module.exports = addSprintsOnData
