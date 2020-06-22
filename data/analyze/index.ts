import { analyzeThermoData } from './analyzeThermoData';
import { analyzePhotoData } from './analyzePhotoData';

export const analyzeDeviceData = ({ thermoPath, accelPath, photoPath }) => {
	analyzeThermoData(thermoPath);
	analyzePhotoData(photoPath);
};
