import * as fs from 'fs';
import { getAverageTemp, getTempRange } from './helpers';
import { transformedThermoDataPoint } from '../types';

export const analyzeThermoData = (thermoPath: string) => {
	// load in data from json file
	const getThermoData: () => Promise<string> = () => {
		return new Promise((resolve, reject) => {
			fs.readFile(thermoPath, 'utf8', (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	};

	const runAnalysis = async () => {
		try {
			let thermoJSON: string = await getThermoData();
			let thermoData: { chunks: transformedThermoDataPoint[] } = JSON.parse(
				thermoJSON
			);
			let averageTemp: number = getAverageTemp(thermoData.chunks);
			let tempRange: number[] = getTempRange(thermoData.chunks);
			console.log(`
				Average Temperature: ${averageTemp}
				Minumum Temperature: ${tempRange[0]}
				Maximum Temperatue: ${tempRange[1]}
			`);
		} catch (err) {
			console.log(err);
		}
	};

	runAnalysis().then(() => {
		// clean up temp file holding thermometer data
		fs.writeFile(thermoPath, '', () => {
			console.log('Thermo temp file cleared...');
		});
	});
};
