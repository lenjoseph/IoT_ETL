import { transformedThermoDataPoint } from '../../types';
import { round } from '../../transform/helpers';

export const getAverageTemp = (arr: transformedThermoDataPoint[]) => {
	const tempsArray: number[] = arr.map((obj) => {
		return obj.celcius;
	});

	const average: number =
		tempsArray.reduce((acc, c) => acc + c, 0) / arr.length;
	return round(average, 2);
};

export const getTempRange = (arr: transformedThermoDataPoint[]) => {
	const tempsArray: number[] = arr.map((obj) => {
		return obj.celcius;
	});

	const minTemp: number = tempsArray.reduce((a, b) => {
		return Math.min(a, b);
	});

	const maxTemp: number = tempsArray.reduce((a, b) => {
		return Math.max(a, b);
	});

	return [minTemp, maxTemp];
};
