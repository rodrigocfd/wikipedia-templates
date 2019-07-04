import {newDayMonthYear} from '../app/DayMonthYear';
import {AlbumType} from './AlbumType';

export function newInfoboxAlbumData() {
	return {
		name: '',
		type: 'none' as AlbumType,
		artist: '',
		cover: '',
		released: newDayMonthYear(),
		genre: '',
		producer: '',
		studio: '',
		label: ''
	};
};

export default interface InfoboxAlbumData
	extends ReturnType<typeof newInfoboxAlbumData> { };
