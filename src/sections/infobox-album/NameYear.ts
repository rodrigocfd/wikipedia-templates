/**
 * Model for previous/next album.
 */
export default interface NameYear {
	name: string;
	year: number | '';
}

export function newNameYear(): NameYear {
	return {
		name: '',
		year: ''
	}
}
