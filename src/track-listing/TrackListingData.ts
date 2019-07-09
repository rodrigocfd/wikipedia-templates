import Track from './Track';
import {newFields} from './Fields';

export function newTrackListingData() {
	return {
		tracks: [] as Track[],
		fields: newFields()
	};
};

export default interface TrackListingData
	extends ReturnType<typeof newTrackListingData> { };
