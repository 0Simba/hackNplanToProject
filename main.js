
/*===================================
=            Depedencies            =
===================================*/

var fs           = require("fs")
var extractFile  = require('./extract_files.js')
var sortStories  = require('./sort_stories.js')
var convertToCsv = require('./convert_to_csv.js')





/*=================================
=            Execution            =
=================================*/

var toCsvConfig = ['id', 'parentId', 'type', 'name', 'description', 'hierarchy']

console.log("extracting start");

extractFile(function (extractedFiles) {

    var stories    = sortStories(extractedFiles.stories)
    var storiesCsv = convertToCsv(stories, toCsvConfig)

    write(storiesCsv)

    console.log("extracting ended")
});


function write (string) {
    fs.writeFile("./test.csv", string, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}
