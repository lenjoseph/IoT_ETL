import * as fs from 'fs';
import { transformThermoDataPoint } from '../transform/transformThermoDataPoint';
import { transformAccelDataPoint } from '../transform/transformAccelDataPoint';
import { transformPhotoDataPoint } from '../transform/transformPhotoDataPoint';
import {
	transformedThermoDataPoint,
	transformedAccelDataPoint,
	transformedPhotoDataPoint,
} from '../types/types';

// this function performs the data extraction, transformation, and loading into a temp directory
export async function writeDataToFile(
	iterable,
	paths: { thermoPath: string; accelPath: string; photoPath: string }
) {
	console.log(`Initializing device data stream...`);

	const thermoChunks: { chunks: transformedThermoDataPoint[] } = { chunks: [] };

	const accelChunks: { chunks: transformedAccelDataPoint[] } = { chunks: [] };

	const photoChunks: { chunks: transformedPhotoDataPoint[] } = {
		chunks: [],
	};

	// loop over generator function to asynchronously retrieve chunks of device data
	for await (const rawChunk of iterable) {
		if (rawChunk.device === 'Thermometer') {
			// perform device-specific transformations on raw data chunks
			const chunk: transformedThermoDataPoint = transformThermoDataPoint(
				rawChunk
			);
			// add transformed chunk to data array
			thermoChunks.chunks.push(chunk);
		}
		if (rawChunk.device === 'Accelerometer') {
			const chunk: transformedAccelDataPoint = transformAccelDataPoint(
				rawChunk
			);
			accelChunks.chunks.push(chunk);
		}
		if (rawChunk.device === 'Photosensor') {
			const chunk: transformedPhotoDataPoint = transformPhotoDataPoint(
				rawChunk
			);
			photoChunks.chunks.push(chunk);
		}
	}
	console.log(`Finished receiving device data...`);
	console.log(`Building json files for device data...`);
	// stringify arrays of device data objects
	const thermoJSON = JSON.stringify(thermoChunks, null, 4);
	const accelJSON = JSON.stringify(accelChunks, null, 4);
	const photoJSON = JSON.stringify(photoChunks, null, 4);

	// write stringified data to json files
	fs.writeFile(paths.thermoPath, thermoJSON, (err) => {
		if (err) {
			console.log(err);
		}
	});
	fs.writeFile(paths.accelPath, accelJSON, (err) => {
		if (err) {
			console.log(err);
		}
	});
	fs.writeFile(paths.photoPath, photoJSON, (err) => {
		if (err) {
			console.log(err);
		}
	});

	console.log(`Converting building json files for device data...`);

	return;
}
