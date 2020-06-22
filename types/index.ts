export interface baseDataPoint {
	device: string;
	id: string;
}

export interface thermoDataPoint extends baseDataPoint {
	origin: string;
	fahrenheit: number;
}

export interface accelDataPoint extends baseDataPoint {
	company: string;
	runTimeHours: number;
	walkTimeHours: number;
	idleTimeHours: number;
}

export interface photoDataPoint extends baseDataPoint {
	source: string;
	lux: number;
}

export type dataPoint = thermoDataPoint | accelDataPoint | photoDataPoint;

export type transformedThermoDataPoint = {
	device: string;
	id: string;
	origin: string;
	normalizedID: string;
	celcius: number;
};

export type transformedAccelDataPoint = {
	device: string;
	id: string;
	origin: string;
	normalizedID: string;
	runTimeMinutes: number;
	walkTimeMinutes: number;
	idleTimeMinutes: number;
};

export type transformedPhotoDataPoint = {
	device: string;
	id: string;
	origin: string;
	normalizedID: string;
	lux: number;
};
