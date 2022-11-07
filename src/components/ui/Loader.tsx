import React from 'react';
import { ReactComponent as Spinner } from 'assets/spinner.svg';

const Loader: React.FC = () => {
	return (
		<div className="opacity-70 absolute right-5 top-5 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-secondary-700  transition ease-in-out duration-150">
			<Spinner />
			Loading...
		</div>
	);
};

export { Loader };
