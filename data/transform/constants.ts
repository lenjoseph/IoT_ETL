export const fahrenheightToCelcius = (fahrenheit: number) => {
	const conversion = (fahrenheit - 32) / 1.8;
	return Math.round((conversion + Number.EPSILON) * 100) / 100;
};
