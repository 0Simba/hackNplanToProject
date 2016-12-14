

function toProjectFormat (data) {
	for (var i = 0; i < data.length; i++) {
		data[i].number = i + 1
		data[i].active = 'Oui'
		data[i].mode   = 'Planifiées manuellement'
	}
}


module.exports = toProjectFormat
