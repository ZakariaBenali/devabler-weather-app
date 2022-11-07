import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { generateForecastFakeData } from 'data/faker';
import React, { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { getForeCasts } from 'service/weather';
import { ICity } from 'types/city';
import { groupForecastByDay } from 'utils/forecastsUtils';
import { ForecastSingle } from './ForecastSingle';

interface IProps {
	city: ICity;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForecastWeather: React.FC<IProps> = ({ city, setLoading }) => {
	const { data, fetchStatus } = useQuery(['forecast', city], () => getForeCasts(city), {
		keepPreviousData: true,
		initialData: generateForecastFakeData(),
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.error(`Something went wrong: ${error.message}`);
			}
		},
	});

	useEffect(() => {
		setLoading(fetchStatus === 'fetching');
	}, [fetchStatus]);

	const forecast = useMemo(() => data && groupForecastByDay(data), [data]);

	return (
		<div className="flex flex-wrap items-center justify-center">
			{Object.getOwnPropertyNames(forecast).map((day, i) => (
				<ForecastSingle data={forecast?.[day][0]} day={day} key={i} />
			))}
		</div>
	);
};

export { ForecastWeather };
