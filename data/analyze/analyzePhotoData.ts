import * as fs from 'fs';
import { getPhotoOriginMode } from './helpers';
import { transformedPhotoDataPoint } from '../types';

export const analyzePhotoData = (photoPath: string) => {
	// load in data from json file
	const getPhotoData: () => Promise<string> = () => {
		return new Promise((resolve, reject) => {
			fs.readFile(photoPath, 'utf8', (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	};

	const runAnalysis = async () => {
		try {
			let photoJSON: string = await getPhotoData();
			let photoData: { chunks: transformedPhotoDataPoint[] } = JSON.parse(
				photoJSON
			);
			const originMode: string = getPhotoOriginMode(photoData.chunks);
			console.log(`
                Most frequent photosensor origin: ${originMode}
            `);
		} catch (err) {
			console.log(err);
		}
	};

	runAnalysis().then(() => {
		// clean up temp file holding thermometer data
		fs.writeFile(photoPath, '', () => {
			console.log('Photo temp file cleared...');
		});
	});
};
