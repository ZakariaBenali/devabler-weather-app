export interface IWeatherResponse {
	weather: [
		{
			main: string;
			description: string;
			icon: string;
		},
	];
	main: {
		temp?: number;
	};
}

export interface IForecastResponse {
	list: Array<
		IWeatherResponse & {
			dt_txt: string;
		}
	>;
}

export interface IGroupedForecastByDay {
	[day: string]: IWeatherResponse[];
}
