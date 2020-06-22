const round = (num: number, decimals: number) => {
	num = num * Math.pow(10, decimals);
	num = Math.round(num);
	num = num / Math.pow(10, decimals);
	return num;
};

export const fahrenheightToCelcius = (fahrenheit: number) => {
	const conversion = ((fahrenheit - 32) * 5) / 9;
	return round(conversion, 2);
};
