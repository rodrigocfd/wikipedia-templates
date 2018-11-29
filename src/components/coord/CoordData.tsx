/**
 * Model which describes all data of Coord.
 */
export default interface CoordData {
	latLng: string;
	type: 'inline' | 'title' | 'inline,title';
}

export function newCoordData(): CoordData {
	return {
		latLng: '',
		type: 'inline'
	}
}
