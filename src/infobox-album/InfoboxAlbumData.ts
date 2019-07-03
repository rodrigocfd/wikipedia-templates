export const albumTypes = <const>['none', 'studio', 'demo',
	'EP', 'live', 'greatest', 'remix', 'box', 'compilation',
	'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];

export type AlbumType = typeof albumTypes[number];

export function newInfoboxAlbumData() {
	return {
		name: '',
		type: 'none' as AlbumType,
		artist: '',
		cover: ''
	};
};

export default interface InfoboxAlbumData
	extends ReturnType<typeof newInfoboxAlbumData> { }
