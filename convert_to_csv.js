

function exportToCsv (arrayObject, config) {
	var csv = config.join(',');

	for (var i = 0; i < arrayObject.length; i++) {
		var data = arrayObject[i]

		csv += '\r'


		var elements = [];
		for (var j = 0; j < config.length; j++) {
			var key = config[j]

			elements.push(data[key]);
		}

		csv += elements.join(',')
	}

	return csv;
}



module.exports = exportToCsv