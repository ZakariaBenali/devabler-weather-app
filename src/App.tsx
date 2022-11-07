import { CitySelector } from 'components/ui/CitySelector';
import { Weather } from 'components/ui/Weather';
import { cities } from 'data/constants';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ICity } from 'types/city';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [selectedCity, setSelectedCity] = useState<ICity>(cities[0]);
	return (
		<main className="flex flex-col items-center bg-primary-200 min-h-screen overflow-auto font-primary text-black">
			<CitySelector selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
			<ToastContainer />
			<article className="shadow-xl border-4  border-white rounded-xl relative">
				<Weather city={selectedCity} />
			</article>
		</main>
	);
}

export { App };
