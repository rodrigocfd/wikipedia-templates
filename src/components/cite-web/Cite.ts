/**
 * Model for a citation.
 */
export default interface Cite {
	refName?: string;
	url?: string;
	title?: string;
	publisher?: string;
	date?: Date;
	accessDate?: Date;
	language?: string;
}

export function newCite(): Cite {
	return {
		refName: '',
		url: '',
		title: '',
		publisher: '',
		date: new Date(),
		accessDate: new Date(),
		language: ''
	};
}