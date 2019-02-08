/**
 * The fields that can be hidden/shown for a track.
 */
export default interface Fields {
	notes: boolean;
	writer: boolean;
	lyrics: boolean;
	music: boolean;
}

export function newFields(): Fields {
	return {
		notes: false,
		writer: false,
		lyrics: false,
		music: false
	}
}
