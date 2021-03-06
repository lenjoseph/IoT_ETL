import * as fs from 'fs';
import { getMedianIdleTime, getHighestExerciseTime } from './helpers';
import { transformedAccelDataPoint } from '../../types';

export const analyzeAccelData = (accelPath: string) => {
	// load in data from json file
	const getAccelData: () => Promise<string> = () => {
		return new Promise((resolve, reject) => {
			fs.readFile(accelPath, 'utf8', (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	};

	const runAnalysis = async () => {
		try {
			let accelJSON: string = await getAccelData();
			let accelData: { chunks: transformedAccelDataPoint[] } = JSON.parse(
				accelJSON
			);
			// exit analysis if no data was created for accelerometers
			if (accelData.chunks.length === 0) {
				console.log(`\n --- There is no accelerometer data to analyze. ---`);
				return;
			}
			const medianIdleTime: number | undefined = getMedianIdleTime(
				accelData.chunks
			);
			const highestExerciseTime = getHighestExerciseTime(accelData.chunks);
			console.log(`\n --- Accelerometer Data Summary --- \n\n`);
			if (medianIdleTime !== undefined) {
				console.log(`Median idle time:`, medianIdleTime, `minutes`);
			} else {
				console.log(`Median idle time is unavailable.`);
			}
			console.log(
				`Most minutes spent exercising (walking and running):`,
				highestExerciseTime,
				`minutes`
			);
			// insert analysis here
		} catch (err) {
			console.log(err);
		}
	};

	runAnalysis().then(() => {
		// clean up temp file holding accelerometer data
		fs.writeFile(accelPath, '', () => {
			console.log(`\nAccel temp file cleared...`);
		});
	});
};
