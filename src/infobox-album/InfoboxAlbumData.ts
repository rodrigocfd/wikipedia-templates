import {newDayMonthYear} from '../app/DayMonthYear';
import {AlbumType} from './AlbumType';
import {newNameYear} from './NameYear';

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
		label: '',
		prevAlbum: newNameYear(),
		nextAlbum: newNameYear()
	};
};

export default interface InfoboxAlbumData
	extends ReturnType<typeof newInfoboxAlbumData> { };
