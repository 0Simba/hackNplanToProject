
var separator = ';'

function exportToCsv (arrayObject, config) {
	var csv = config.name.join(separator);

	for (var i = 0; i < arrayObject.length; i++) {
		var data = arrayObject[i]

		csv += '\r'


		var elements = [];
		for (var j = 0; j < config.keys.length; j++) {
			var key = config.keys[j]

			elements.push(data[key]);
		}

		csv += elements.join(separator)
	}

	return csv;
}



module.exports = exportToCsv