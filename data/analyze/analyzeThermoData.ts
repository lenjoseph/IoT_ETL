import * as fs from 'fs';

const analyzeThermoData = (thermoPath: string) => {
	let thermoData;
	fs.readFile(thermoPath, 'utf8', (err, thermoJSON) => {
		if (err) {
			console.error(err);
		}
		try {
			let parsedThermoData = JSON.parse(thermoJSON);
			thermoData = parsedThermoData.chunks;
			console.log(thermoData);
		} catch (err) {
			console.error(err);
		}
	});
};

analyzeThermoData('../temp/thermoData.json');
