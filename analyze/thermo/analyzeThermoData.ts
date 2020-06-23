import * as fs from 'fs';
import { getAverageTemp, getTempRange } from './helpers';
import { transformedThermoDataPoint } from '../../types';

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
			if (thermoData.chunks.length === 0) {
				console.log(`There is no thermometer data to analyze.`);
				return;
			}
			let averageTemp: number = getAverageTemp(thermoData.chunks);
			let tempRange: number[] = getTempRange(thermoData.chunks);
			console.log(
				`\n --- Thermometer Data Summary --- \n\nAverage Temperature:`,
				averageTemp,
				`\nMinumum Temperature:`,
				tempRange[0],
				`\nMaximum Temperatue:`,
				tempRange[1]
			);
		} catch (err) {
			console.log(err);
		}
	};

	runAnalysis().then(() => {
		// clean up temp file holding thermometer data
		fs.writeFile(thermoPath, '', () => {
			console.log(`\nThermo temp file cleared...`);
		});
	});
};
