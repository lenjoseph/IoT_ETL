import { analyzeThermoData } from './thermo/analyzeThermoData';
import { analyzePhotoData } from './photo/analyzePhotoData';

export const analyzeDeviceData = ({ thermoPath, accelPath, photoPath }) => {
	analyzeThermoData(thermoPath);
	analyzePhotoData(photoPath);
};
