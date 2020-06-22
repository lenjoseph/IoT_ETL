import { transformedAccelDataPoint } from '../../types';

export const getMedianIdleTime = (arr: transformedAccelDataPoint[]) => {
	const idleTimeArray: number[] = arr.map((obj) => {
		return obj.idleTimeMinutes;
	});

	const findMedian = (minuteArr: number[]) => {
		if (minuteArr.length === 0) {
			return undefined;
		}

		const sortedArr: number[] = minuteArr.sort((a, b) => {
			return a - b;
		});

		const half: number = Math.floor(sortedArr.length / 2);

		if (sortedArr.length % 2) {
			return sortedArr[half];
		}

		return (sortedArr[half - 1] + sortedArr[half]) / 2;
	};

	return findMedian(idleTimeArray);
};

export const getHighestExerciseTime = (arr: transformedAccelDataPoint[]) => {
	const exerciseArray: number[] = arr.map((obj) => {
		return obj.walkTimeMinutes + obj.runTimeMinutes;
	});

	const sortedArr: number[] = exerciseArray.sort((a, b) => {
		return a - b;
	});

	return sortedArr[sortedArr.length - 1];
};
