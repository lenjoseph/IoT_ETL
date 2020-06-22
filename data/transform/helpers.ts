import { writeFile } from 'fs';

export const round = (num: number, decimals: number) => {
	num = num * Math.pow(10, decimals);
	num = Math.round(num);
	num = num / Math.pow(10, decimals);
	return num;
};

export const fahrenheightToCelcius = (fahrenheit: number) => {
	const conversion = ((fahrenheit - 32) * 5) / 9;
	return round(conversion, 2);
};

export const hoursToMinutes = (hours: number) => {
	const decimal = hours % 1;
	const decMinutes = decimal * 60;
	const wholeHours = Math.floor(hours);
	const wholeMinutes = wholeHours * 60;

	return round(decMinutes + wholeMinutes, 2);
};
