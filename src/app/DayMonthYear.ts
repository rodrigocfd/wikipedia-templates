export default interface DayMonthYear {
	day: number | '';
	month: number | ''; // one-based
	year: number | '';
};

export function newDayMonthYear(): DayMonthYear {
	return <DayMonthYear>{
		day: '',
		month: '',
		year: ''
	};
};
