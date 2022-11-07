import React from 'react';
import { IWeatherResponse } from 'types/weather';

interface IProps {
	day: string;
	data?: IWeatherResponse;
}

const ForecastSingle: React.FC<IProps> = ({ day, data }) => {
	return (
		<div className="flex flex-col items-center py-5 px-16 border-b-4 border-white w-full sm:w-auto sm:border-4">
			<p className="text-2xl mb-4">{day}</p>
			<img src={`/assets/${data?.weather[0].icon}.png`} />
			<h2 className="text-5xl font-secondary">{data?.main.temp ? Math.round(data.main.temp) : '-'}°</h2>
		</div>
	);
};

export { ForecastSingle };
