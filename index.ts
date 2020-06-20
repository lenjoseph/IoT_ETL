import { readDeviceData } from './data/extract/index';
import writeDeviceData from './data/load/index';
import * as fs from 'fs';
import { analyzeData } from './data/analyze/normalizeData';

// generate data, perform write to disc with data separated by device source
writeDeviceData(readDeviceData(5, 300), {
	thermoPath: './data/temp/thermoData.json',
	accelPath: './data/temp/accelData.json',
	photoPath: './data/temp/photoData.json',
}).then(() => {
	// do stuff with files
});
