import { readDeviceData } from './data/extract/index';
import writeDeviceData from './data/load/index';
import { analyzeDeviceData } from './data/analyze/index';

// generate data, perform write to disc with data separated by device source
writeDeviceData(readDeviceData(5, 25), {
	thermoPath: './data/temp/thermoData.json',
	accelPath: './data/temp/accelData.json',
	photoPath: './data/temp/photoData.json',
}).then(() => {
	analyzeDeviceData({
		thermoPath: './data/temp/thermoData.json',
		accelPath: '',
		photoPath: './data/temp/photoData.json',
	});
});