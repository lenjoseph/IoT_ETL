import * as fs from 'fs';
import { getPhotoOriginMode, getSensorEnvironmentMapping } from './helpers';
import { transformedPhotoDataPoint } from '../../types';

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
			const environmentMapping = getSensorEnvironmentMapping(photoData.chunks);

			console.log(
				`\n --- Photosensor Data Summary --- \n\nMost frequent photosensor origin: ${originMode}\n`
			);
			console.log(`Photosensor environment frequencies\n`);
			for (let [key, value] of Object.entries(environmentMapping)) {
				console.log(key, `:`, value);
			}
		} catch (err) {
			console.log(err);
		}
	};

	runAnalysis().then(() => {
		// clean up temp file holding photosensor data
		fs.writeFile(photoPath, '', () => {
			console.log(`\nPhoto temp file cleared...`);
		});
	});
};
