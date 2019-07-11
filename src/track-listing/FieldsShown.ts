/**
 * Fields that can be hidden/shown for a track.
 */
export function newFieldsShown() {
	return {
		notes: true,
		writer: true,
		lyrics: true,
		music: true
	};
};

export default interface FieldsShown
	extends ReturnType<typeof newFieldsShown> { };
