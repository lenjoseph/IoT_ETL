import {
	transformedThermoDataPoint,
	transformedAccelDataPoint,
	transformedPhotoDataPoint,
} from '../types';

export const getAverageTemp = (arr: transformedThermoDataPoint[]) => {
	const tempsArray: number[] = arr.map((obj) => {
		return obj.celcius;
	});

	const average = tempsArray.reduce((acc, c) => acc + c, 0) / arr.length;
	return average;
};

export const getTempRange = (arr: transformedThermoDataPoint[]) => {
	const tempsArray: number[] = arr.map((obj) => {
		return obj.celcius;
	});

	const minTemp = tempsArray.reduce((a, b) => {
		return Math.min(a, b);
	});

	const maxTemp = tempsArray.reduce((a, b) => {
		return Math.max(a, b);
	});

	return [minTemp, maxTemp];
};

export const getPhotoOriginMode = (arr: transformedPhotoDataPoint[]) => {
	// find the most-common string in origin array
	const getStringMode = (arr: string[]) => {
		let mapping: { [key: string]: number } = {};
		for (let i = 0; i < arr.length; i++) {
			if (!mapping[arr[i]]) mapping[arr[i]] = 0;
			mapping[arr[i]] += 1;
		}
		const max = Object.keys(mapping).reduce((a, b) =>
			mapping[a] > mapping[b] ? a : b
		);
		return max;
	};

	const originArray: string[] = arr.map((obj) => {
		return obj.origin;
	});

	return getStringMode(originArray);
};
