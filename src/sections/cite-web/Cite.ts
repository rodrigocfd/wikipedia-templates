import DayMonthYear, {newDayMonthYear} from '../DayMonthYear';

/**
 * Model for a citation.
 */
export default interface Cite {
	refName: string;
	url: string;
	title: string;
	transTitle: string;
	publisher: string;
	date: DayMonthYear;
	accessDate: DayMonthYear;
	language: string;
}

export function newCite(): Cite {
	return {
		refName: '',
		url: '',
		title: '',
		transTitle: '',
		publisher: '',
		date: newDayMonthYear(),
		accessDate: newDayMonthYear(),
		language: ''
	};
}
