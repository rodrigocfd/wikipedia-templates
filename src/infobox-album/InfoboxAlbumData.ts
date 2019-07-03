export function newInfoboxAlbumData() {
	return {
		name: ''
	};
};

export default interface InfoboxAlbumData
	extends ReturnType<typeof newInfoboxAlbumData> { }

export const albumTypes = ['none', 'studio', 'demo', 'EP', 'live', 'greatest', 'remix',
	'box', 'compilation', 'mixtape', 'soundtrack', 'film', 'cast', 'video', 'other'];
