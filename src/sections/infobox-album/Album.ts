import DayMonthYear, {newDayMonthYear} from '../DayMonthYear';

/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	type: number;
	artist: string;
	cover: string;
	released: DayMonthYear;
	producer: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		type: 0,
		artist: '',
		cover: '',
		released: newDayMonthYear(),
		producer: '',
		label: ''
	};
}

export const albumTypes = ['none', 'studio', 'demo', 'EP', 'live', 'greatest', 'remix',
	'box', 'compilation', 'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];
