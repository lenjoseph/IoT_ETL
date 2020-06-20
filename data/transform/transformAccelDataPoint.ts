import { randomBytes } from 'crypto';
import { transformedAccelDataPoint, accelDataPoint } from '../types/types';

const convertToCelcius = (fahrenheit: number) => {
	return (fahrenheit - 32) / 1.8;
};

export const transformAccelDataPoint: (
	chunk: accelDataPoint
) => transformedAccelDataPoint = (chunk: accelDataPoint) => {
	return {
		normalizedID: randomBytes(8).toString('hex'),
		device: chunk.device.toUpperCase(),
		id: chunk.id,
		origin: chunk.company,
		degreeArray: [chunk.xDegree, chunk.yDegree, chunk.zDegree],
	};
};
