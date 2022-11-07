import { IForecastResponse, IWeatherResponse } from 'types/weather';
import { addDaysToCurrent } from 'utils/dateUtil';

export const currentWeatherFakeData: IWeatherResponse = {
	weather: [
		{
			main: '-',
			description: '-',
			icon: '03d',
		},
	],
	main: {},
};

export const generateForecastFakeData = (): IForecastResponse => {
	const days: Array<
		IWeatherResponse & {
			dt_txt: string;
		}
	> = [...Array(4)].map((_, i) => {
		return {
			weather: [
				{
					main: '-',
					description: '-',
					icon: '03d',
				},
			],
			main: {},
			dt_txt: addDaysToCurrent(i + 1).toDateString(),
		};
	});

	return {
		list: days,
	};
};
