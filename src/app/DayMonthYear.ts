export function newDayMonthYear() {
	return {
		day: '' as number | '',
		month: '' as number | '', // one-based
		year: '' as number | ''
	};
};

export default interface DayMonthYear
	extends ReturnType<typeof newDayMonthYear> { }
