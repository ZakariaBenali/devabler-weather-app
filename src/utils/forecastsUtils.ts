import { IForecastResponse, IGroupedForecastByDay } from 'types/weather';

function groupForecastByDay(data: IForecastResponse) {
	const groupedByDay = data.list.reduce((acc, curr) => {
		const dt = new Date(curr.dt_txt);
		const day = dt.toLocaleDateString('en-US', { weekday: 'short' });
		const isToday = dt.getDate() === new Date().getDate();

		// Get only forecast for the next 4 days
		if (isToday || Object.getOwnPropertyNames(acc).length > 3) {
			return acc;
		}
		if (!Object.hasOwn(acc, day)) {
			Object.defineProperty(acc, day, {
				value: [],
			});
		}

		const { dt_txt, ...rest } = curr;
		acc[day].push(rest);
		return acc;
	}, {} as IGroupedForecastByDay);
	return groupedByDay;
}

export { groupForecastByDay };
