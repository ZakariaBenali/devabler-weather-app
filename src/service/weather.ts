import { axiosInstance } from 'lib/axiosInstance';
import { ICity } from 'types/city';
import { IForecastResponse, IWeatherResponse } from 'types/weather';

const getCurrentWeather = async (city: ICity) => {
	const { data } = await axiosInstance.get<IWeatherResponse>('weather', {
		params: {
			lon: city.coord.lon,
			lat: city.coord.lat,
		},
	});

	return data;
};

const getForeCasts = async (city: ICity) => {
	const { data } = await axiosInstance.get<IForecastResponse>('forecast', {
		params: {
			lon: city.coord.lon,
			lat: city.coord.lat,
		},
	});

	return data;
};

export { getForeCasts, getCurrentWeather };
