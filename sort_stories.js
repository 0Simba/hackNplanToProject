
function sortStories (stories_) {
    var stories = copyObject(stories_)
    var sorted  = [];

    extractRootElements(sorted, stories)
    extractChildsElements(sorted, stories)

    return sorted;
}


function extractChildsElements (sorted, stories) {
    var index = 1;

    while (stories.length) {
        if (index > 1000) {
            throw new Error("Some stories parent id doesn\'t exists");
        }

        extractChildsIndexElements(sorted, stories);
    }
}


function extractChildsIndexElements (sorted, stories) {
    for (var i = 0; i < stories.length; i++) {
        var story         = stories[i]
        var storyParentId = story.parentId

        var parentStoryIndex = getParentStoryIndex(sorted, storyParentId);

        if (parentStoryIndex !== -1) {
            story.hierarchy = sorted[parentStoryIndex].hierarchy + 1
            story.type      = 'story'
            sorted.splice(parentStoryIndex + 1, 0, story)
            stories.splice(i, 1)
        }
    }
}


function getParentStoryIndex (sorted, id) {
    for (var i = sorted.length - 1; i >= 0; i--) {
        if (sorted[i].id === id) {
            return i;
        }
    }

    return -1
}


function extractRootElements (sorted, stories) {
    for (var i = stories.length - 1; i >= 0; i--) {
        var story = stories[i]

        if (story.parentId === -1) {
            story.hierarchy = 1;
            story.type      = 'story'
            sorted.push(story)
            stories.splice(i, 1)
        }
    }
}


function copyObject (object) {
    return JSON.parse(JSON.stringify(object))
}


module.exports = sortStories