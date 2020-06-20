"use strict";
exports.__esModule = true;
var fs = require("fs");
var analyzeThermoData = function (thermoPath) {
    var thermoData;
    fs.readFile(thermoPath, 'utf8', function (err, thermoJSON) {
        if (err) {
            console.error(err);
        }
        try {
            var parsedThermoData = JSON.parse(thermoJSON);
            thermoData = parsedThermoData.chunks;
            console.log(thermoData);
        }
        catch (err) {
            console.error(err);
        }
    });
};
analyzeThermoData('../temp/thermoData.json');
