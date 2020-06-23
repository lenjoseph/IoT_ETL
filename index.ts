import readDeviceData from './device/index';
import writeDeviceData from './load/index';
import analyzeDeviceData from './analyze/index';

// generate data, perform write to disc with data separated by device source
writeDeviceData(readDeviceData(2, 5), {
	thermoPath: './temp/thermoData.json',
	accelPath: './temp/accelData.json',
	photoPath: './temp/photoData.json',
}).then(() => {
	analyzeDeviceData({
		thermoPath: './temp/thermoData.json',
		accelPath: './temp/accelData.json',
		photoPath: './temp/photoData.json',
	});
});
