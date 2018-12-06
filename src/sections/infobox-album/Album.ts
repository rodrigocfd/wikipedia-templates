import DayMonthYear, {newDayMonthYear} from '../DayMonthYear';

/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	type: string;
	artist: string;
	released: DayMonthYear;
	producer: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		type: '',
		artist: '',
		released: newDayMonthYear(),
		producer: '',
		label: ''
	};
}
