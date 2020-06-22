import { transformedThermoDataPoint } from '../../types';

export const getAverageTemp = (arr: transformedThermoDataPoint[]) => {
	const tempsArray: number[] = arr.map((obj) => {
		return obj.celcius;
	});

	const average: number =
		tempsArray.reduce((acc, c) => acc + c, 0) / arr.length;
	return average;
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
