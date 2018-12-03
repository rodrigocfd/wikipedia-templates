/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	artist: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		artist: '',
		label: ''
	};
}
