import {newDayMonthYear} from '../app/DayMonthYear';

export function newDataCiteWeb() {
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

export default interface DataCiteWeb
	extends ReturnType<typeof newDataCiteWeb> { };
