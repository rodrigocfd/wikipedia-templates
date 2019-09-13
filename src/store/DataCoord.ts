export type CoordDisplay = 'inline' | 'title' | 'inline,title';

export function newDataCoord() {
	return {
		latLng: '',
		display: 'inline' as CoordDisplay
	};
};

export default interface DataCoord
	extends ReturnType<typeof newDataCoord> { };
