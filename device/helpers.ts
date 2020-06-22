export const round = (num: number, decimals: number) => {
	num = num * Math.pow(10, decimals);
	num = Math.round(num);
	num = num / Math.pow(10, decimals);
	return num;
};
