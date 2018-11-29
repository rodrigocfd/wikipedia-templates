export type PossibleTypes = 'inline' | 'title' | 'inline,title';

/**
 * Model which describes all data of Coord.
 */
export default interface CoordData {
	latLng: string;
	display: PossibleTypes;
}

export function newCoordData(): CoordData {
	return {
		latLng: '',
		display: 'inline'
	}
}
