
var fs        = require("fs")
var toRead    = require('./toRead.js');
var Converter = require("csvtojson").Converter
var data      = {};


function extractFiles (callback) {

    var loaded = 0

    forEachToReadObjects(function (name, path, config) {
        extract(path, config, function (extractedData) {

            data[name] = extractedData;

            loaded++;

            if (loaded >= toRead.length) {
                callback(data)
            }

        })
    });

}


function extract (path, config, callback) {
    var converter = new Converter({})

    converter.on("end_parsed", function (jsonArray) {
        extractObject(jsonArray, config, callback);
    })

    fs.createReadStream(path).pipe(converter)
}


function extractObject (jsonArray, config, callback) {

    var parsed = []

    for (var i = 0; i < jsonArray.length; i++) {
        var object          = jsonArray[i]
        var extractedObject = extractKeys(config, object)

        parsed.push(extractedObject)
    }

    callback(parsed);
}


function extractKeys (config, object) {
    var extracted = {}

    for (var key in config.extractKeys) {
        extracted[key] = object[key] || config.extractKeys[key].default
    }

    return extracted
}


function forEachToReadObjects (callback) {
    for (var i = 0; i < toRead.length; i++) {
        var name   = toRead[i].name
        var path   = toRead[i].path
        var config = toRead[i].config

        callback(name, path, config)
    }
}



module.exports = extractFiles