
var utils = require('./utils.js');


function setTasksDates (data) {
	var tasks   = data.tasks
	var sprints = data.sprint


	for (var i = 0; i < tasks.length; i++) {
		addTaskDates(tasks[i], sprints)
	}
}


function addTaskDates (task, sprints) {
	var sprintId = task.sprintId
	var sprint   = getSprint(sprintId, sprints)


	var startDate = '';

	if (sprint) {
		task.sprintNumber = sprint.sprintNumber
		startDate         = sprint.startDate
	}
	else {
		task.sprintNumber = 0
		startDate         = sprints[0].startDate
	}

	task.startDate = utils.dateToddmmyyyy(new Date(startDate))
}


function getSprint (id, sprints) {
	for (var i = 0; i < sprints.length; i++) {
		var sprint = sprints[i]

		if (sprint.sprintId === id) {
			return sprint
		}
	}

	return null
}



module.exports = setTasksDates
