
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

	if (sprint) {
		task.startDate = sprint.startDate
		task.endDate   = sprint.endDate
	}
	else {
		task.startDate = '-'
		task.endDate   = '-'
	}
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
