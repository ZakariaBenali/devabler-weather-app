import React, { useEffect } from 'react';
import { ICity } from 'types/city';
import { getCurrentWeather } from 'service/weather';
import { currentWeatherFakeData } from 'data/faker';
import { IWeatherResponse } from 'types/weather';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios from 'axios';

interface Props {
	city: ICity;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentWeather: React.FC<Props> = ({ city, setLoading }) => {
	const { data, fetchStatus } = useQuery<IWeatherResponse>(['currentWeather', city], () => getCurrentWeather(city), {
		keepPreviousData: true,
		initialData: currentWeatherFakeData,
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.error(`Something went wrong: ${error.message}`);
			}
		},
	});

	useEffect(() => {
		setLoading(fetchStatus === 'fetching');
	}, [fetchStatus]);

	return (
		<>
			<div className="flex flex-col items-center border-b-4 border-b-white py-12">
				<p className="text-4xl mb-8">Today</p>
				<div className="flex items-center">
					<img src={`/assets/${data?.weather[0].icon}.png`} />
					<div className="flex flex-col">
						<h2 className="text-8xl font-secondary">{data?.main.temp ? Math.round(data.main.temp) : '-'}°</h2>
						<p className="text-4xl">{data?.weather[0].main}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export { CurrentWeather };
