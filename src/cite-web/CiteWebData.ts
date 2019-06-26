import DayMonthYear from '../app/DayMonthYear';

export default interface CiteWebData {
	refName: string;
	url: string;
	title: string;
	transTitle: string;
	publisher: string;
	date: DayMonthYear;
	accessDate: DayMonthYear;
	language: string;
};
