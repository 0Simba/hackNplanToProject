
/*===================================
=            Depedencies            =
===================================*/

var fs          = require("fs")
var extractFile = require('./extract_files.js')
var sortStories = require('./sort_stories.js')






/*=================================
=            Execution            =
=================================*/

console.log("extracting start");

extractFile(function (extractedFiles) {

    var stories = sortStories(extractedFiles.stories);

    write(JSON.stringify(stories))

    console.log("extracting ended")
});


function write (string) {
    fs.writeFile("./test.csv", string, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}
