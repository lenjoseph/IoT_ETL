import { randomBytes } from 'crypto';
import { origins } from './constants';
import { dataPoint } from '../types/types';

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
				fahrenheit: Math.floor(Math.random() * 40) + 50,
			};
			break;
		case 2:
			dataPoint = {
				device: 'Accelerometer',
				id: randomBytes(7).toString('hex'),
				company: origins[Math.floor(Math.random() * origins.length)],
				// range is 0 to 360
				xDegree: Math.floor(Math.random() * 361),
				yDegree: Math.floor(Math.random() * 361),
				zDegree: Math.floor(Math.random() * 361),
			};
			break;
		case 3:
			dataPoint = {
				device: 'Photosensor',
				id: randomBytes(9).toString('hex'),
				source: origins[Math.floor(Math.random() * origins.length)],
				lux: Math.floor(Math.random() * 801),
			};
	}
	return dataPoint;
};

// generates a new datapoint for each iteration
export async function* generateData(interval: number, volume: number) {
	for (let i = 0; i < volume; i++) {
		await new Promise((r) => setTimeout(r, interval));
		yield generateDataPoint();
	}
}
