import { randomBytes } from 'crypto';
import { transformedPhotoDataPoint, photoDataPoint } from '../types';

export const transformPhotoDataPoint: (
	chunk: photoDataPoint
) => transformedPhotoDataPoint = (chunk: photoDataPoint) => {
	return {
		normalizedID: randomBytes(8).toString('hex'),
		device: chunk.device.toUpperCase(),
		id: chunk.id,
		origin: chunk.source,
		lux: chunk.lux,
	};
};
