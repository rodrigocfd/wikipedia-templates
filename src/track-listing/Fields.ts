/**
 * Fields that can be hidden/shown for a track.
 */
export function newFields() {
	return {
		notes: true,
		writer: true,
		lyrics: true,
		music: true
	};
};

export default interface Fields
	extends ReturnType<typeof newFields> { };
