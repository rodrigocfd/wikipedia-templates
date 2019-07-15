/**
 * Fields that can be hidden/shown for a track.
 */
export function newFieldsShown() {
	return {
		note: false,
		writer: false,
		lyrics: false,
		music: false
	};
};

export default interface FieldsShown
	extends ReturnType<typeof newFieldsShown> { };
