import { cities } from 'data/constants';
import { ICity } from 'types/city';

interface IProps {
	selectedCity: ICity;
	setSelectedCity: React.Dispatch<React.SetStateAction<ICity>>;
}

const CitySelector = ({ selectedCity, setSelectedCity }: IProps) => {
	return (
		<header className="flex py-8">
			{cities.map((city, i) => (
				<button
					key={i}
					onClick={() => setSelectedCity(city)}
					className={`text-xl sm:text-3xl md:text-4xl text-black first-of-type:mr-8 last-of-type:ml-8 hover:text-secondary-400 ${
						selectedCity.name === city.name ? 'font-bold text-secondary-400 ' : ''
					}`}
				>
					{city.name.toUpperCase()}
				</button>
			))}
		</header>
	);
};

export { CitySelector };
