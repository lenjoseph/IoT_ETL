import { analyzeThermoData } from './thermo/analyzeThermoData';
import { analyzePhotoData } from './photo/analyzePhotoData';
import { analyzeAccelData } from './accel/analyzeAccelData';

const analyzeDeviceData = ({ thermoPath, accelPath, photoPath }) => {
	analyzeThermoData(thermoPath);
	analyzeAccelData(accelPath);
	analyzePhotoData(photoPath);
};

export default analyzeDeviceData;
