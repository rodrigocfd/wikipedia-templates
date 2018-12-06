/**
 * Model for a simple date.
 */
export default interface DayMonthYear {
	day: number | '';
	month: number | ''; // one-based
	year: number | '';
}

export function newDayMonthYear(): DayMonthYear {
	return {
		day: '',
		month: '',
		year: ''
	};
}

export function sameDayMonthYear(v1: DayMonthYear, v2: DayMonthYear): boolean {
	return v1.day == v2.day &&
		v1.month == v2.month &&
		v1.year == v2.year;
}
