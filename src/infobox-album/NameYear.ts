/**
 * Used for previous/next album.
 */
export function newNameYear() {
	return {
		name: '',
		year: '' as number | ''
	};
};

export default interface NameYear
	extends ReturnType<typeof newNameYear> { };
