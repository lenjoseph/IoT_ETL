import { randomBytes } from 'crypto';
import { hoursToMinutes } from './helpers';
import { transformedAccelDataPoint, accelDataPoint } from '../types';

export const transformAccelDataPoint: (
	chunk: accelDataPoint
) => transformedAccelDataPoint = (chunk: accelDataPoint) => {
	return {
		normalizedID: randomBytes(8).toString('hex'),
		device: chunk.device.toUpperCase(),
		id: chunk.id,
		origin: chunk.company,
		runTimeMinutes: hoursToMinutes(chunk.runTimeHours),
		walkTimeMinutes: hoursToMinutes(chunk.walkTimeHours),
		idleTimeMinutes: hoursToMinutes(chunk.idleTimeHours),
	};
};
