import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_OPENWEATHERMAP_API_URL,
	params: {
		appid: import.meta.env.VITE_OPENWEATHERMAP_KEY,
		units: 'metric',
	},
});

export { axiosInstance };
