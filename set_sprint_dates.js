

function setSprintDates (sprints, firstDate) {
	sprints[0].startDate = firstDate

	for (var i = 1 ; i < sprints.length; i++) {
		sprint = sprints[i]

		sprint.startDate = sprints[i - 1].endDate
	}
}


module.exports = setSprintDates
