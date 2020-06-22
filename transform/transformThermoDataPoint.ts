import { randomBytes } from 'crypto';
import { transformedThermoDataPoint, thermoDataPoint } from '../types';
import { fahrenheightToCelcius } from './helpers';

export const transformThermoDataPoint: (
	chunk: thermoDataPoint
) => transformedThermoDataPoint = (chunk: thermoDataPoint) => {
	return {
		normalizedID: randomBytes(8).toString('hex'),
		device: chunk.device.toUpperCase(),
		id: chunk.id,
		origin: chunk.origin,
		celcius: fahrenheightToCelcius(chunk.fahrenheit),
	};
};
