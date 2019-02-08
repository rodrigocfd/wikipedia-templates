import DayMonthYear, {newDayMonthYear} from '../DayMonthYear';
import NameYear, {newNameYear} from './NameYear';

/**
 * Model for an album.
 */
export default interface InfoboxAlbumData {
	name: string;
	type: number;
	artist: string;
	cover: string;
	released: DayMonthYear;
	genre: string;
	producer: string;
	studio: string;
	label: string;
	prevAlbum: NameYear;
	nextAlbum: NameYear;
}

export function newInfoboxAlbumData(): InfoboxAlbumData {
	return {
		name: '',
		type: 0,
		artist: '',
		cover: '',
		released: newDayMonthYear(),
		genre: '',
		producer: '',
		studio: '',
		label: '',
		prevAlbum: newNameYear(),
		nextAlbum: newNameYear()
	};
}

export const albumTypes = ['none', 'studio', 'demo', 'EP', 'live', 'greatest', 'remix',
	'box', 'compilation', 'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];
