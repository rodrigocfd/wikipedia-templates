/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	type: string;
	artist: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		type: '',
		artist: '',
		label: ''
	};
}
