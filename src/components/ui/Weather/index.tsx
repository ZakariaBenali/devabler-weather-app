import React, { useState } from 'react';
import { CurrentWeather } from 'components/ui/Weather/Current';
import { ICity } from 'types/city';
import { ForecastWeather } from './ForecastWeather';
import { Loader } from '../Loader';

interface Props {
	city: ICity;
}

const Weather: React.FC<Props> = ({ city }) => {
	const [currentLoading, setCurrentLoading] = useState(true);
	const [forecastLoading, setForecastLoading] = useState(true);
	return (
		<>
			{(currentLoading || forecastLoading) && <Loader />}
			<CurrentWeather city={city} setLoading={setCurrentLoading} />
			<ForecastWeather city={city} setLoading={setForecastLoading} />
		</>
	);
};

export { Weather };
