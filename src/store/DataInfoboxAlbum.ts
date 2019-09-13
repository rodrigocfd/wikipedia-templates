import {newDayMonthYear} from '../app/DayMonthYear';
import {AlbumType} from '../infobox-album/AlbumType';
import {newNameYear} from '../infobox-album/NameYear';

export function newDataInfoboxAlbum() {
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

export default interface DataInfoboxAlbum
	extends ReturnType<typeof newDataInfoboxAlbum> { };
