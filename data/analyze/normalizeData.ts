import * as fs from 'fs';

export const analyzeData = (path: string) => {
	console.log(`Initializing data analysis...`);
	fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
		if (err) {
			throw err;
		}
		console.log(data);
		console.log(`Finized analyzing data...`);
	});
};
