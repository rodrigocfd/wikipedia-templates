import DayMonthYear, {newDayMonthYear} from '../DayMonthYear';

/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	type: string;
	artist: string;
	cover: string;
	released: DayMonthYear;
	producer: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		type: '',
		artist: '',
		cover: '',
		released: newDayMonthYear(),
		producer: '',
		label: ''
	};
}
