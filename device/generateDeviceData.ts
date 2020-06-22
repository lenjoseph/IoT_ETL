import { randomBytes } from 'crypto';
import { origins } from './constants';
import { round } from './helpers';
import { dataPoint } from '../types';

// creates random alphanumeric string of length from 1 to 10
const generateDataPoint = () => {
	let dataPoint: dataPoint = { device: '', id: '', origin: '', fahrenheit: 0 };

	let deviceID = Math.floor(Math.random() * 3) + 1;

	switch (deviceID) {
		case 1:
			dataPoint = {
				device: 'Thermometer',
				id: randomBytes(5).toString('hex'),
				origin: origins[Math.floor(Math.random() * origins.length)],
				// range is 50 to 90
				fahrenheit: Math.floor(Math.random() * 150) + 1,
			};
			break;
		case 2:
			dataPoint = {
				device: 'Accelerometer',
				id: randomBytes(7).toString('hex'),
				company: origins[Math.floor(Math.random() * origins.length)],
				runTimeHours: round(Math.random() * 2, 2),
				walkTimeHours: round(Math.random() * 4, 2),
				idleTimeHours: round(Math.random() * 8, 2),
			};
			break;
		case 3:
			dataPoint = {
				device: 'Photosensor',
				id: randomBytes(9).toString('hex'),
				source: origins[Math.floor(Math.random() * origins.length)],
				// range is 50 to 1000
				lux: Math.floor(Math.random() * 950) + 50,
			};
	}
	return dataPoint;
};

// generates a new datapoint for each iteration
export async function* generateData(volume: number, interval: number) {
	for (let i = 0; i < volume; i++) {
		await new Promise((r) => setTimeout(r, interval));
		yield generateDataPoint();
	}
}
