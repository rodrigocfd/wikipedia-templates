/**
 * Model for a simple date.
 */
export default interface DayMonthYear {
	day: number;
	month: number; // one-based
	year: number;
}

export function newDayMonthYear(): DayMonthYear {
	return {
		day: 0,
		month: 0,
		year: 0
	};
}
