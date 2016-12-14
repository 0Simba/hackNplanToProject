

function setSprintDates (sprints, firstDate) {
	sprints[0].startDate    = firstDate
	sprints[0].sprintNumber = 1

	for (var i = 1 ; i < sprints.length; i++) {
		sprint = sprints[i]

		sprint.sprintNumber = i +1
		sprint.startDate    = sprints[i - 1].endDate
	}
}


module.exports = setSprintDates
