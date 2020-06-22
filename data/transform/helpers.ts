import { writeFile } from 'fs';

export const round = (num: number, decimals: number) => {
	num = num * Math.pow(10, decimals);
	num = Math.round(num);
	num = num / Math.pow(10, decimals);
	return num;
};

export const fahrenheightToCelcius = (fahrenheit: number) => {
	const conversion: number = ((fahrenheit - 32) * 5) / 9;
	return round(conversion, 2);
};

export const hoursToMinutes = (hours: number) => {
	const decimal: number = hours % 1;
	const decMinutes: number = decimal * 60;
	const wholeHours: number = Math.floor(hours);
	const wholeMinutes: number = wholeHours * 60;

	return round(decMinutes + wholeMinutes, 2);
};
