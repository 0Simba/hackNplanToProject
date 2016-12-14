
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
        index++;
        if (index > 100) {
            throw new Error("!!");
        }

        extractChildsIndexElements(sorted, index, stories);
    }
}


function extractChildsIndexElements (sorted, index, stories) {
    for (var i = 0; i < stories.length; i++) {
        var story = stories[i]
        
    }
}


function extractRootElements (sorted, stories) {
    for (var i = stories.length - 1; i >= 0; i--) {
        var story = stories[i]

        if (story.ParentDesignElementId === -1) {
            story.hierarchy = 0;
            sorted.push(story)
            stories.splice(i, 1)
        }
    }
}


function copyObject (object) {
    console.log(object)
    return JSON.parse(JSON.stringify(object))
}


module.exports = sortStories