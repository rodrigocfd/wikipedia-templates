export type CoordDisplay = 'inline' | 'title' | 'inline,title';

export function newCoordData() {
	return {
		latLng: '',
		display: 'inline' as CoordDisplay
	};
};

export default interface CoordData
	extends ReturnType<typeof newCoordData> { };
