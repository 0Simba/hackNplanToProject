
/*===================================
=            Depedencies            =
===================================*/

var fs                = require("fs")
var extractFile       = require('./extract_files.js')
var sortStories       = require('./sort_stories.js')
var convertToCsv      = require('./convert_to_csv.js')
var addTasksOnStories = require('./add_tasks_on_stories.js')
var setSprintDates    = require('./set_sprint_dates.js')
var setTasksDates     = require('./set_tasks_dates.js')
var toProjectFormat   = require('./to_project_format.js')





/*=================================
=            Execution            =
=================================*/

var toCsvConfig = {
	keys : ['number', 'active', 'mode',       'type', 'name', 'description', 'startDate', 'endDate', 'cost', 'hierarchy', 'sprintNumber'],
	name : ['N°',     'Actif',  'Mode Tâche', 'Genre', 'Nom',  'Description', 'Début',     'Fin', 'Durée',     'Niveau hiérarchique', 'Sprint Number']
}

console.log("extracting start");

extractFile(function (extractedFiles) {

	setSprintDates(extractedFiles.sprint, '10/17/2016 12:00:00 AM')

	var data = sortStories(extractedFiles.stories)

	setTasksDates(extractedFiles)
	addTasksOnStories(data, extractedFiles.tasks);

	toProjectFormat(data)

	var csv = convertToCsv(data, toCsvConfig)

    write(csv)

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
