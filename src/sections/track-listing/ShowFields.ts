/**
 * The fields that can be hidden/shown for a track.
 */
export default interface ShowFields {
	notes: boolean;
	writer: boolean;
	lyrics: boolean;
	music: boolean;
}

export function newShowFields(): ShowFields {
	return {
		notes: false,
		writer: false,
		lyrics: false,
		music: false
	}
}
