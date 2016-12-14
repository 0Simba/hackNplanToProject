
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
		task.startDate    = dateToddmmyyyy(new Date(sprint.startDate))
		task.endDate      = ''
		task.sprintNumber = sprint.sprintNumber
	}
	else {
		task.startDate    = ''
		task.endDate      = ''
		task.sprintNumber = 0
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


function dateToddmmyyyy (date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
		(dd>9 ? '' : '0') + dd,
		(mm>9 ? '' : '0') + mm,
		date.getFullYear()
	].join('/');
};



module.exports = setTasksDates
