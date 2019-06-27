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

type CiteWebData = ReturnType<typeof newCiteWebData>;
export default CiteWebData;
