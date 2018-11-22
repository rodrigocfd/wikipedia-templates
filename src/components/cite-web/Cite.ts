/**
 * Model for a citation.
 */
export default interface Cite {
	refName?: string;
	url?: string;
	title?: string;
	publisher?: string;
	date?: string;
	accessDate?: string;
	language?: string;
}

export function newCite(): Cite {
	return {
		refName: '',
		url: '',
		title: '',
		publisher: '',
		date: '',
		accessDate: '',
		language: ''
	};
}