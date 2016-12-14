

function addTasksOnStories (stories, tasks) {
	for (var i = 0; i < tasks.length; i++) {
		var task = tasks[i]

		addTaskOnStories(stories, task)
	}
}


function addTaskOnStories (stories, task) {
	var parentId         = task.parentId
	var parentStoryIndex = getStoryIndex(stories, parentId)


	task.type = 'task'
	task.cost = Math.max(task.estimatedCost, task.finalCost)

	task.cost = Math.round(task.cost / 7 * 100) / 100
	task.cost += (task.cost > 1) ? ' jours' : ' jour'
	task.cost.replace(/\./g, ',')


	if (parentStoryIndex !== null) {
		task.hierarchy = stories[parentStoryIndex].hierarchy + 1
		stories.splice(parentStoryIndex + 1, 0, task)
	}
	else {
		console.warn(task.name + ' has not story parent')

		task.hierarchy = 1
		stories.push(task)
	}

}


function getStoryIndex (stories, id) {
	for (var i = 0; i < stories.length; i++) {
		var story = stories[i]

		if (story.id === id) {
			return i
		}
	}

	return null
}


module.exports = addTasksOnStories
