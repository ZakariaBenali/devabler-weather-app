const addDaysToCurrent = (day: number) => {
	const dt = new Date();
	return new Date(dt.setDate(dt.getDate() + day));
};

export { addDaysToCurrent };
