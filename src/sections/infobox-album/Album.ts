/**
 * Model for an album.
 */
export default interface Album {
	name: string;
	type: string;
	artist: string;
	producer: string;
	label: string;
}

export function newAlbum(): Album {
	return {
		name: '',
		type: '',
		artist: '',
		producer: '',
		label: ''
	};
}
