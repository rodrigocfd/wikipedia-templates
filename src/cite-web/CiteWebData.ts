import {newDayMonthYear} from '../app/DayMonthYear';

export function newCiteWebData() {
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
};

export default interface CiteWebData
	extends ReturnType<typeof newCiteWebData> { }
