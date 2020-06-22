import { transformedPhotoDataPoint } from '../../types';

export const getPhotoOriginMode = (arr: transformedPhotoDataPoint[]) => {
	const originArray: string[] = arr.map((obj) => {
		return obj.origin;
	});

	// find the most-common string in origin array
	const getStringMode = (arr: string[]) => {
		let mapping: { [key: string]: number } = {};
		for (let i = 0; i < arr.length; i++) {
			if (!mapping[arr[i]]) mapping[arr[i]] = 0;
			mapping[arr[i]] += 1;
		}
		const max: string = Object.keys(mapping).reduce((a, b) =>
			mapping[a] > mapping[b] ? a : b
		);
		return max;
	};

	return getStringMode(originArray);
};

export const getSensorEnvironmentMapping = (
	arr: transformedPhotoDataPoint[]
) => {
	const luxArray: number[] = arr.map((obj) => {
		return obj.lux;
	});
	const sourceArray: string[] = [];

	for (let i = 0; i < luxArray.length; i++) {
		if (luxArray[i] < 100) {
			sourceArray.push('Parking Garage');
		}
		if (luxArray[i] >= 100 && luxArray[i] < 200) {
			sourceArray.push('Storage Room');
		}
		if (luxArray[i] >= 200 && luxArray[i] < 300) {
			sourceArray.push('Cafeteria');
		}
		if (luxArray[i] >= 300 && luxArray[i] < 400) {
			sourceArray.push('Conference Room');
		}
		if (luxArray[i] >= 400 && luxArray[i] < 500) {
			sourceArray.push('Gym');
		}
		if (luxArray[i] >= 500 && luxArray[i] < 600) {
			sourceArray.push('Classroom');
		}
		if (luxArray[i] >= 600 && luxArray[i] < 700) {
			sourceArray.push('Laboratory');
		}
		if (luxArray[i] >= 700 && luxArray[i] < 800) {
			sourceArray.push('Convenience Store');
		}
		if (luxArray[i] >= 800 && luxArray[i] < 900) {
			sourceArray.push('Study Room');
		}
		if (luxArray[i] >= 900) {
			sourceArray.push('Outdoors');
		}
	}

	let luxMapping: { [key: string]: number } = {};
	for (let i = 0; i < sourceArray.length; i++) {
		luxMapping[sourceArray[i]] = (luxMapping[sourceArray[i]] || 0) + 1;
	}
	return luxMapping;
};
